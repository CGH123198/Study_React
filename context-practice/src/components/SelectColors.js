import React, { Component } from 'react';
import ColorContext from '../context/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];

class SelectColors extends Component {
    static contextType = ColorContext;

    handleSetColor = col => {
        this.context.actions.setColor(col);
    }

    hadleSetSubcolor = sub => {
        this.context.actions.setSubColor(sub);
    }

    render() {
        return(
            <div>
                <h2>색상을 선택하세요.</h2>
                <div style={{ display: 'flex' }}>
                    {colors.map(color => (
                        <div
                            key={color}
                            style={{
                                background: color,
                                width: '24px',
                                height: '24px',
                                cursor: 'pointer'
                            }}
                            onClick={() => this.handleSetColor(color)}
                            onContextMenu={e => {
                                e.preventDefault();
                                this.handleSetSubcolor(color);
                            }}
                        />
                    ))}
                </div>
                <hr />
            </div>
        );
    };
}
export default SelectColors;