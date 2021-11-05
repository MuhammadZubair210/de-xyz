import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Keypair, SystemProgram, Transaction, LAMPORTS_PER_SOL } from '@solana/web3.js';
import React, { FC, useCallback } from 'react';
import { WalletModalProvider, WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const SendOneLamportToRandomAddress = ({ ...props }) => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const onClick = useCallback(async () => {
        if (!publicKey) throw new WalletNotConnectedError();

        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: 'FGd5EVPuLiEsyYrwYKUnhUYob6grJvtAuYQS2tdbM3SW',
                lamports: 33333333 
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
              

                <WalletMultiButton> <txt style={{fontSize: 14}}> Connect Wallet to Send a Tip </txt></WalletMultiButton>
            ) : (
               

                 <WalletMultiButton onClick={onClick}> Tip .0333 SOL</WalletMultiButton>

            )}
        </div>
    );
};
export default SendOneLamportToRandomAddress;
