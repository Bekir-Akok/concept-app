import React from 'react'
import {
    Company,
    CompTitle,
    CompInt,
    CompLi,
    CompP,
    CompT,
    CompUl,
    Line
}  from './style.js'


const index = () => {
    return (
        <Company>
            <CompTitle>A company you can rely on.</CompTitle>
            <CompUl>
                <CompLi>
                    <CompInt first>400+</CompInt>
                    <CompT>PROJECTS DELIVERED</CompT>
                    <CompP>for happy clients</CompP>
                </CompLi>
                <Line/>
                <CompLi>
                    <CompInt secondary>30+</CompInt>
                    <CompT>TEAM OF DEDICATED</CompT>
                    <CompP>in-house experts</CompP>
                </CompLi>
                <Line/>
                <CompLi>
                    <CompInt third>15+</CompInt>
                    <CompT>YEARS</CompT>
                    <CompP>eCommerce experience</CompP>
                </CompLi>
                <Line/>
                <CompLi>
                    <CompInt four>7+</CompInt>
                    <CompT>AVERAGE PARTNERSHIP</CompT>
                    <CompP>with customers</CompP>
                </CompLi>
            </CompUl>
            <CompTitle>What our customers say.</CompTitle>
        </Company>
    )
}

export default index
