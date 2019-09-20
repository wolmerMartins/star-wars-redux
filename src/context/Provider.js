import React, { Component } from 'react';

import Context from './Context';
import api from '../services';

class Provider extends Component {
    state = {
        isLoading: true,
        filteredBy: '',
        data: {},
        dataSelected: {
            status: false,
            data: {}
        }
    }

    async getDataByPage(page) {
        this.setState({ isLoading: true });

        try {
            let response = await api.fetch.get(page);
            this.setState({ data: response.data, isLoading: false });
        } catch(err) {
            console.log({ error: err });
        }
    }

    returnToHome() {
        this.setState({ dataSelected: { status: false, data: this.state.dataSelected.data } });
        
        let page = 1;
        if (this.state.data.previous) page = parseInt(this.state.data.previous.replace(/[^0-9]/g, '')) + 1;
        this.getDataByPage(`https://swapi.co/api/${this.state.filteredBy}/?page=${page}`);
    }

    async getDataByUrl(card) {
        let urls = [];
        let cardRef = [];

        for (let attr in card) {
            if (Array.isArray(card[attr]) || attr === 'homeworld') {
                switch(attr) {
                    case 'homeworld':
                        urls.push(card[attr]);
                        break;
                    default:
                        card[attr].forEach(url => {
                            urls.push(url);
                        });
                }
            }
        }

        return Promise.all(
            urls.map(async url => {
                let response = await api.fetch.get(url);
                cardRef.push(response.data);
            })
        ).then(resolve => cardRef);
    }

    async getDataById(cardId) {
        this.setState({ isLoading: true });

        let card = this.state.data.results.filter(dt => dt.url === cardId);
        let response = await this.getDataByUrl(card[0]);
        
        for (let attr in card[0]) {
            if (Array.isArray(card[0][attr]) || attr === 'homeworld') {
                switch(attr) {
                    case 'homeworld':
                        card[0].homeworld = response.filter(res => res.url.indexOf('planets') > -1)[0];
                        break;
                    default:
                        card[0][attr] = response.filter(res => res.url.indexOf(attr) > -1);
                }
            }
        }

        this.setState({ dataSelected: { status: true, data: card[0] }, isLoading: false });
    }

    async getDataByFilter(filter) {
        this.setState({ isLoading: true, filteredBy: filter, dataSelected: { status: false, card: this.state.dataSelected.data } });
        
        try {
            let response = await api.fetchBase.get(filter);
            this.setState({ data: response.data, isLoading: false });
        } catch(err) {
            console.log({ error: err });
        }
    }

    async componentDidMount() {
        //this.getDataByFilter('people');
    }

    render() {
        return (
            <Context.Provider
                value={{
                    isLoading: this.state.isLoading,
                    filteredBy: this.state.filteredBy,
                    data: this.state.data,
                    dataSelected: this.state.dataSelected,
                    getDataByFilter: (filter) => this.getDataByFilter(filter),
                    getDataById: (cardId) => this.getDataById(cardId),
                    getDataByPage: (page) => this.getDataByPage(page),
                    returnToHome: () => this.returnToHome()
                }}
            >
                { this.props.children }
            </Context.Provider>
        );
    }
}

export default Provider;