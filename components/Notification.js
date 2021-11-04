import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';

const anchorTag = {
    borderRadius: '0px 9px 0px 0px',
    padding: '10px',
    backgroundColor: '#404144',
    color: 'white',
    textDecoration: 'none',
};

export default function Navigation({ signature }) {
    let explorer = `https://explorer.solana.com/tx/${signature}?cluster=mainnet`;
    return (
        <div style={{ position: 'fixed', bottom: '11px', left: '4px' }}>
            <Link href={explorer} target="blank">
                <a style={anchorTag} target="_blank">
                    View successfull transaction
                </a>
            </Link>
        </div>
    );
}
