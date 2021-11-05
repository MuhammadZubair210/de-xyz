import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Post.module.css';
import PostNavbar from '../components/PostNavbar';
import SendSol from '../components/SendSol';
import Notification from '../components/Notification';
import { useState } from 'react';

export default function Post() {
    const [signature, setSignature] = useState('');

    return (
        <div>
                <div className={styles.navdiv}>
            <PostNavbar></PostNavbar>
            </div>
         

            <div className={styles.postcontainer}>
                <div>
                    <Head>
                        <title>by DeGods</title>
                        <meta name="description" content="by DeGods" />
                        <meta name="viewport"content="width=device-width, initial-scale=1.0" />
                        <link rel="icon" href="/degodslogo.png" />
                    </Head>
                </div>
                <div>

                    <div>
                        <h1 className={styles.titlepost}>Understanding the Solana Block Explorer for NFTs</h1>
                        <Image src="/headerpic.jpg" alt="post1-1" height={600} width={800} objectFit="contain" />
                    </div>

                    <div className={styles.author}>
                        <div className={styles.authorun}>
                        <Image
                            src="/original.png"
                            alt="post1-1"
                            height={60}
                            width={60}
                            className={styles.authoricon}
                        />
                        <div style={{display:'flex', flexDirection: 'column'}}>
                        <txt className={styles.authorname}>Written by </txt>
                        <txt className={styles.authorname}><a href="https://twitter.com/rebootx0">@Rebootx0</a></txt>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'flex-end', flex: 1}}>

                        <SendSol setSignature={setSignature} />
                        </div>

                        </div>

                    </div>

                    <p>All of these magic .jpegs we’re buying on the internet have something special about them.</p>
                    <p>
                        They are on the blockchain. So, knowing how the blockchain works is going to give you an edge in
                        understanding what’s happening under the hood with your NFTs.
                    </p>

                    <p>
                        You can do this and more by using the{' '}
                        <a href="https://explorer.solana.com/" target="_blank" rel="noopener noreferrer">
                            Solana Explorer
                        </a>
                        ; a tool created by the Solana team to navigate through the Solana Blockchain.
                    </p>

                    <p>
                    Let&apos;s get started.
                    </p>

                    <h2> Finding your NFT </h2>

                    <p> To do anything on Solana Explorer, you will need some sort of address.</p>

                    <ol>
                        <li>Click the triple dots on your NFT in Phantom and click “View on Explorer.”</li>

                        <div className={styles.imagecontainer}>
                            <Image
                                src="/post1/image11.png"
                                alt="post1-1"
                                height={300}
                                width={300}
                                objectFit="contain"
                            />
                            <span style={{ marginTop: 20 }}> Screenshot of an NFT in a phantom wallet</span>
                        </div>

                        <li>
                            Copy the <strong> Mint Address </strong>
                        </li>

                        <div className={styles.blockquote}>
                            <strong> Mint Address: </strong> This is the unique identifier for an NFT
                        </div>

                        <div className={styles.imagecontainer}>
                            {/* <div style={{borderRadius: 20, overflow: 'hidden', borderWidth: 3, border: '1px #FFF'}}> */}
                            <Image
                                src="/post1/image9.png"
                                alt="post1-1"
                                height={400}
                                width={600}
                                className={styles.imageround}
                                // style={{borderRadius: 20}}
                                objectFit="cover"
                            />
                            {/* </div> */}
                            <span style={{ marginTop: 20 }}>Address: BgEuh9thWSsWNfSLzqtZozqfE
                            j9CzQwsDXuQaC8bAyTP</span>
                        </div>

                        <div className={styles.imagecontainer}>
                            <Image src="/post1/image2.png" className={styles.imageround} alt="post1-1" height={100} width={600} objectFit="contain" />
                            {/* <span style={{ marginTop: 20 }}>   Address: BgEuh9thWSsWNfSLzqtZozqfEj9CzQwsDXuQaC8bAyTP</span> */}

                            {/* <a
                                href="https://alpha.art/t/BgEuh9thWSsWNfSLzqtZozqfEj9CzQwsDXuQaC8bAyTP"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Screenshot of an NFT in a phantom wallet
                            </a> */}

                            <span style={{ marginTop: 20 }}>
                                {' '}
                                Mint Addresses are usually used on Marketplaces for individual NFT page URLs
                            </span>
                        </div>

                        <li>
                            <p>
                                You are looking at this <strong> NFT’s Block Explorer Page </strong>
                            </p>
                        </li>

                        <div className={styles.imagecontainer}>
                            <Image src="/post1/image1.png" className={styles.imageround} alt="post1-1" height={500} width={600} objectFit="contain" />

                            <span style={{ marginTop: 20 }}> Solana Explorer Page of DeGod #3467</span>
                        </div>
                    </ol>

                    <p>
                        Now with this information, <strong> we can find the mint cost. </strong>
                    </p>

                    <h2>Finding the Mint Cost</h2>

                    <ol>
                        <li>Click the History Tab</li>
                        <li>Scroll to the first transaction (the most bottom one)</li>
                        <li>
                            Click the <strong> transaction signature </strong>
                        </li>
                    </ol>

                    <div className={styles.imagecontainer}>
                        <Image src="/post1/image10.png" alt="post1-1" height={600} width={600} objectFit="contain" />
                        <span style={{ marginTop: 20 }}> Transaction data of DeGod #3467&apos;s Mint 
</span>
                    </div>

                    <p>The “Account Inputs” section lists all information about this Mint Transaction. </p>

                    <p>
                        In the first line, the highlighted pink value,
                        <code> -◎3.0119812</code>, is the amount of SOL that the original minter spent on this NFT.{' '}
                    </p>

                    <p>
                        The <strong> Post Balance </strong> for their wallet after this mint was{' '}
                        <code>◎3.19274064</code> which means they had 6.2 SOL in their wallet before this mint.{' '}
                    </p>

                    <p>
                        Then, we see that the address starting with <code> AXFuni...</code> got <code>+◎3.19274064</code>{' '}
                    </p>

                    <p>
                        <strong>Boom, 3 SOL. That&apos;s the official mint price.</strong>
                    </p>

                    <h2>Finding the Current NFT Holder</h2>

                    <ol>
                    <li>Go back to your NFT’s <strong>Block Explorer Page</strong></li>
                        <li>Go to the most recent Transaction Signature in the History tab</li>
                        <li>Scroll down and find Token: Initialize Account</li>
                        <li>The Owner in this section is the current holder of this NFT</li>
                  

                    <div className={styles.imagecontainer}>
                        <Image src="/post1/image6.png" alt="post1-1" height={200} width={600} objectFit="contain" />
                        <span style={{ marginTop: 20 }}> DeGod #3467&apos;s latest Transaction
 </span>
                    </div>

                    <li>The Owner in this section is the current holder of this NFT</li>
                    </ol>

                    <h2>How NFT Sales Work</h2>

                    <p>
                        <strong>Listings</strong>
                    </p>

                    <p>
                        If an NFT is listed, this means that the NFT isn’t currently in any one person’s “wallet”. It is
                        being held in an escrow account (kind of like a middleman), so if someone buys it, they can get
                        it immediately.
                    </p>

                    <p>Once it is sold, a program executes and sends the Lister SOL & sends the Buyer the NFT.</p>

                    <p>
                        Look at how the timestamps for the listing & sale align with the Block Explorer and the
                        Marketplace.
                    </p>

                    <div className={styles.imagecontainer}>
                        <Image src="/post1/image4.png" alt="post1-1" height={150} width={600} objectFit="contain" />
                        <span style={{ marginTop: 20 }}> Alpha Art&apos;s Listing of DeGod #3467
 </span>
                    </div>

                    <div className={styles.imagecontainer}>
                        <Image src="/post1/image5.png" alt="post1-1" height={150} width={600} objectFit="contain" />
                        <span style={{ marginTop: 20 }}>Solana Explorer Page of DeGod #3467</span>
                    </div>

                    <p>
                        The bottom transaction that starts with 4Crak... is the Transaction that lists the NFT on the
                        marketplace.
                    </p>

                    <p>Search for “Token: Set Authority” to find where the important details are.</p>

                    <div className={styles.imagecontainer}>
                        <Image src="/post1/image7.png" alt="post1-1" height={300} width={600} objectFit="contain" />
                        <span style={{ marginTop: 20 }}> Listing Transaction of DeGod #346 </span>
                    </div>

                    <ul>
                        <li>Account: the shared escrow wallet that’s created to store the listed NFT</li>
                        <li>NewAuthority: The marketplace’s wallet</li>
                        <li>Signers #1: Wallet authorizing this Instruction</li>
                    </ul>

                    <h2>The Sale</h2>

                    <ol>
                        <li>Navigate to the transaction that starts with 4VPiQuw6dmvc</li>
                        <li>Account Inputs will show all the information we need to know about sales.</li>
                    </ol>

                    <div className={styles.imagecontainer}>
                        <Image src="/post1/image8.png" alt="post1-1" height={600} width={600} objectFit="contain" />
                        {/* <span style={{ marginTop: 20 }}> Sales Transaction of DeGod #3467  </span> */}
                    </div>

                    <ol>
                        <li>Wallet uses ◎6.00204428 to purchase this item</li>
                        <li>Collect ◎0.00203928 for gas to help move the NFT</li>
                        <li>
                            The Shared Wallet that held the NFT in the marketplace moves the NFT to the buyer using
                            ◎0.00203928 for gas
                        </li>
                        <li>Seller gains ◎5.74566096 tax (Service fee + Royalty fee is already subtracted)</li>
                        <li>
                            Signer and Account that was created for listing closes the account with ◎0.00162168 (This
                            was given in the listing by the Seller)
                        </li>

                        <li>Skip</li>
                        <li>Marketplace’s wallet gains ◎0.084 (Service fee)</li>
                        <li>Skip</li>
                        <li>Skip</li>
                        <li>NFT Creator’s wallet gains ◎0.174 (Royalty fee)</li>
                    </ol>

                    <h2>Tracking the Journey to your wallet</h2>

                    <p>
                        Knowing all this, you can track the journey of any NFT from mint to marketplace listing to a
                        sale to your wallet.
                    </p>

                    <p>
                        I went ahead and highlighted each action in the Transaction History, so please verify by using
                        the skills you’ve learned.
                    </p>

                    <div className={styles.imagecontainer}>
                        <Image
                            src="/post1/image3.png"
                            alt="post1-1"
                            //layout="fixed"

                            height={500}
                            width={600}
                            objectFit="contain"
                            //objectFit="cover"
                        />
                        <span style={{ marginTop: 20 }}> Screenshot of transaction history with guides </span>
                    </div>

                    <p>
                        Solana Explorer is an incredible tool that the Solana team provided, so put it to good use and
                        honestly all the information is out there. Everything you’ve learned in this article can help
                        you verify sketchy listings, track where funds/NFTs go, and track anything that goes on in the
                        Solana block chain. I want you to stay safe from scams, have some great laughs, and see you use
                        this new found knowledge to navigate through this incredible Solana Ecosystem.
                    </p>

                    <p>Knowledge is power, my friends. Cheers 🍻.</p>

                    
                </div>

                <footer className={styles.footer}>
                    <a
                    style={{ color: '#000', textDecoration: 'none'}}
                        href="https://degods.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by DeGods
                    </a>
                </footer>
            </div>
            {signature && signature !== '' ? <Notification signature={signature} /> : null}
        </div>
    );
}
