import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance'

class Credits extends Component {

    /*[{"id":"c41084b1-ad84-4630-bc8d-679fb66c5deb",
        "description":"Tasty Frozen Keyboard",
        "amount":669.68,"date":"2018-04-26T09:26:58.413Z"}
    */
    constructor(props) {
        super(props);
        this.state = {
            creditList: {
                id: "",
                description: "",
                amount: "",
                date: "",
            },
        }
    }
}