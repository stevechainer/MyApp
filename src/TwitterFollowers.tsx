import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TwitterFollowers: React.FC = () => {
  useEffect(() => {
    const getAccessToken = async () => {
        try {
            const resp = await axios.post(
                'https://api.twitter.com/oauth2/token',
                '',
                {
                    params: {
                        'grant_type': 'client_credentials'
                    },
                    auth: {
                        username:"UZE4e0TeNMP9iBcbajPRLY7Ua",
                        password: "jE3mz7plZ7kmytqMOUvLU0AgdGydGCAHduPIqg7qPgltgpyClN"
                    }
                }
            );
            return Promise.resolve(resp.data.access_token);
        } catch (err) {
            console.error(err);
            return Promise.reject(err);
        }
    };
    
    const getFollowers = async (token: string, user_id: string, max_number: number) => {
        try {
            const resp = await axios.get(
                `https://api.twitter.com/2/users/${user_id}/followers`,
                {
                    headers: {
                        'Authorization': 'Bearer '+ token,
                    },
                    params: {
                        'user.fields': 'name,username',
                        'max_results': max_number
                    }
                }
            );
            return Promise.resolve(resp.data);
        } catch (err) {
            return Promise.reject(err);
        }
    };
    
    getAccessToken()
        .then((token) => {
            getFollowers(token, 'satoshisync', 1000)
                .then((result) => {
                    console.log(JSON.stringify(result, null, 4));
                })
                .catch(error => console.log(JSON.stringify(error)));
        })
        .catch(error => console.log(JSON.stringify(error)));
    
  }, []);

  return (
    <div>
        
    </div>
  );
};

export default TwitterFollowers;
