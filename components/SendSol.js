import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Keypair, SystemProgram, Transaction, LAMPORTS_PER_SOL } from '@solana/web3.js';
import React, { FC, useCallback } from 'react';

const SendOneLamportToRandomAddress = ({ ...props }) => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const onClick = useCallback(async () => {
        if (!publicKey) throw new WalletNotConnectedError();

        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: Keypair.generate().publicKey,
                lamports: 1000 + LAMPORTS_PER_SOL,
            })
        );

        const signature = await sendTransaction(transaction, connection);

        await connection.confirmTransaction(signature, 'processed');
        props.setSignature(signature);
        setTimeout(() => {
            props.setSignature('');
        }, 5000);
    }, [publicKey, sendTransaction, connection]);

    return (
        <div>
            {!publicKey ? (
                <span>Tip ◎ 0.01 SOL (wallet not connected)</span>
            ) : (
                <div style={{ cursor: 'pointer' }}>
                    <span onClick={onClick}>Tip now ◎ 0.01 SOL</span>
                </div>
            )}
        </div>
    );
};
export default SendOneLamportToRandomAddress;
