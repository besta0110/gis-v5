import React from 'react';
import axios from 'axios'

import { Container } from '@arch-ui/layout';
import { Title } from '@arch-ui/typography';
import { Alert } from '@arch-ui/alert';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { notification: { pendings: { hero: 0 } } };
    this.API_ENDPOINT = 'http://localhost:3000/admin/api';  
    // this.API_ENDPOINT = 'http://192.186.142.204:3000/admin/api';
    this.ADMIN_PATH = 'http://localhost:3000/admin';
    // this.ADMIN_PATH = 'http://192.186.142.204:3000/admin'
  }

  async componentDidMount() {
    const GET_CURRENT_USER = `query GetCurrentUser {
      authenticatedUser {
        id
        email
        isAdmin
      }
    }`;

    let axioResult = await axios.post(this.API_ENDPOINT, { query: GET_CURRENT_USER });
    let userID = (axioResult ? axioResult.data.data.authenticatedUser.id : null);
    let isAdmin = (axioResult ? axioResult.data.data.authenticatedUser.isAdmin : false);
    let count = 0;

    if (isAdmin) {
      console.log('You are an Admin');
      const GET_ALL_PENDING_HEROES = `
      query GetPendingHeros {
        _allHeroesMeta(where: {status: pending}) {
          count
        }
      }`
      axioResult = await axios.post(this.API_ENDPOINT, { query: GET_ALL_PENDING_HEROES });
      count = (axioResult ? axioResult.data.data._allHeroesMeta.count : null);  
    } else {
      console.log('You are a subscriber');
      const GET_PENDING_HEROES = `
      query GetPendingHeros($id: ID!) {
        allHeroes(where: {author: {id: $id}, status: pending}) {
          id
        }
      }`;
      axioResult = await axios.post(this.API_ENDPOINT, { query: GET_PENDING_HEROES, variables: { id: userID } });
      count = (axioResult ? axioResult.data.data.allHeroes.length : null);
    }
   
    console.log('Count of Pending Hero itmes', count);
    this.setState({ notification: { pendings: { hero: count } } });
  }

  render() {
    let heroCount = this.state.notification.pendings.hero;
    return (
      <Container>
        <Title as="h1" margin="both">
          Dashboard
        </Title>
        {heroCount === 0 ? (<p>You have no any notification</p>) : (<Alert appearance="info"><p>You have {heroCount} pending item(s) waiting for approval in <a href={this.ADMIN_PATH + '/heroes'}>Hero</a> list</p></Alert>) }
      </Container>
    )
  }
}

export default Dashboard;
