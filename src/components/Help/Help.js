import React, {Component} from 'react';
import sizeGuide from '../images/sizeGuide.jpg';
import { Link } from 'react-router-dom';

export default class Help extends Component {

    render(){
        return (
        <div>
            <header>
               <h1>FAQ's</h1> 
            </header>
            <h2>Product Information</h2>
            <br/>
            <p>•How Do I use a Color My Doodle shirt?
            Use a washable crayon to color inside the picture. 
            </p>
            <p>•How Do I use a Color My Doodle shirt?
            Use a washable crayon to color inside the picture. 
            <img className='size-chart'
            src= {sizeGuide}
            alt='sizeGuide'
            />
            </p>
            <h2>Care Instructions</h2>
            <br/>
            <p>
            •How Do I Wash a Color My Doodle shirt?
            We recommend that you use gentle cycle with warm water and with like colors.
            </p>
            <p>
            •What is the proper way to dry a Color Couture shirt?
            We recommend that you dry immediately in tumble dry low with like colors.
            </p>
            <p>
            •Can I dry clean a Color Couture shirt?
            We recommend that you do not dry clean the shirt.
            </p>
            <p>
            •How long should I leave the crayon marks on the shirt?
            We recommend twenty four hours maximum that crayon marks remain on the shirt
            to avoid permanent coloration.
            </p>
            <p>
            •Can I use a wet rag or wet sponge to wipe away the colors?
            If you choose not use wash our shirts, you can either use a wet sponge or wet cloth to wipe away the washable crayon color.
            </p>
            <br/>
            <h2>Payment</h2>
            <br/>
            <p>
            •When will my credit/debit card be charged once my order is placed? 
            Credit card transactions usually take 2-3 business depending on what type of card is used.
            </p>
            <p>
            •How safe is your website from identity theft? 
             We use Stripe for all our transactions. Stripe has some the highest security protocols in the industry.
            </p>
            <br/>
            <h2>Shipping</h2>
            <br/>
            <p>
            •Do I have to pay tax?
            Yes we include state tax for all orders processed within the U.S
            </p>
            <p>
             •Do you cover international shipping?
              Not at the moment
            </p>
            <br/>
            <h2>Returns</h2>
            <p>
            •What is your return policy?
            Any unworn and unwashed Items returned within 14 days of their original shipment date will be eligible for exchange or refund. 
            Shipping and Handling is not refundable..  Items must be in the same condition as it was shipped, we reserve the right to refuse any exchange or refund for any reason.
            </p>


        </div>
        )
    }
}