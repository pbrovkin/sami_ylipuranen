import React from 'react'


const item = {
    width: '21rem',
    minHeight: '23rem',
    color: 'var(--black)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'var(--smoke)',
    borderRadius: '5px',
    margin: '1.5625rem',
    boxShadow: '0 0 0.625rem 0 grey',
    padding: '1.25rem',
    cursor: 'pointer',
};

const subTitle = {
    fontSize: '1.2rem',
    color: 'var(--green)',
    textTransform: 'uppercase',
    fontWeight: 'bold'
};


const subtitleBlock = {
    textAlign: 'center',
    minHeight: '3rem',
    marginBottom: '1rem',
};

const textBlock = {
    textAlign: 'left',
    marginBottom: '4rem',
    lineHeight: '1.6rem',
};

const ServiceItem = ({subtitle, text1, text2}) => {
    return (
        <div style={item}>
            <div style={subtitleBlock}>
            <h3 style={subTitle}>{subtitle}</h3>
            </div>
            <div style={textBlock}>
                <p>{text1}</p>
                <br/>
                <p>{text2}</p>
            </div>
        </div>
    )
};

export default ServiceItem;