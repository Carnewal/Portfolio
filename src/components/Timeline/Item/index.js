import React, {Component} from 'react'
import {Button} from 'react-bootstrap'

export default class Item extends Component {
    render() {

        const {year, title, description, inverted, icon} = this.props

        return (
            <li className={inverted && 'timeline-inverted'}>
                <div class="timeline-badge">
                    {icon || year.toString().split('').slice(2,4).join('')}
                </div>
                <div class="timeline-panel">
                    <div class="timeline-heading">
                    <h4 class="timeline-title">{year} - {title}</h4>
                    </div>
                    <div class="timeline-body">
                    <p>{description}</p>
                    <Button bsStyle="link">More</Button>
                    </div>
                </div>
            </li>
        )
    }
}