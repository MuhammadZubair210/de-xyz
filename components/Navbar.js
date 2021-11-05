import React, { FC, useCallback } from 'react';
import { Nav, Button, Navbar, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { WalletModalProvider, WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import styles from '../styles/Home.module.css';

import { WalletNotConnectedError } from '@solana/wallet-adapter-base';


import { Keypair, SystemProgram, Transaction, LAMPORTS_PER_SOL } from '@solana/web3.js';

export default function Navigation() {
    const { publicKey, sendTransaction } = useWallet();

    const { connection } = useConnection();

    const onClick = useCallback(async () => {
        if (!publicKey) throw new WalletNotConnectedError();

        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: 'FGd5EVPuLiEsyYrwYKUnhUYob6grJvtAuYQS2tdbM3SW',
                lamports: 33300000,
            })
        );

        const signature = await sendTransaction(transaction, connection);

        await connection.confirmTransaction(signature, 'processed');
        this.props.setSignature(signature);
        setTimeout(() => {
            this.props.setSignature('');
        }, 5000);
    }, [publicKey, sendTransaction, connection]);

    return (

        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="https://twitter.com/degodsnft">Twitter</Nav.Link>
                        <Nav.Link href="https://discord.gg/degods">Discord</Nav.Link>
                    </Nav>

                    <Nav>
                        <div>
                            {!publicKey ? (
                                //  <span >Tip ◎ 0.01 SOL (wallet not connected)</span>
                                <WalletMultiButton>Connect Wallet</WalletMultiButton>
                            ) : (
                                <WalletMultiButton></WalletMultiButton>
                            )}{' '}
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
