import React from 'react';

const SplitText = (props) => {
    return (
        <span>
            {
                props.copy.split(/(\S+\s+)/).map((char, index) => {
                    let style = {
                        animationDelay: '0.2s'
                    }
                    return (
                        <span key={index} className='mask'>
                            <span style={style}>{char}</span>
                        </span>
                    );
                })
            }
        </span>
    )
};

export default SplitText;
