import React, { Component } from 'react'

export default function Dashboard(props) {
     
        return (
            <div>
                <h1> {props.user.email}</h1>
            </div>
        )
    }

