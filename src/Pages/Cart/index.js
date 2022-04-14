import './cart.css'
import { Link } from 'react-router-dom'
import React, { useContext } from "react";
import { CartContext } from "../../Context/cart";


export default function Cart() {
    const { productsCart, addProducToCart, removeProductsCart } = useContext(CartContext);

    let subtotal = 0;
    productsCart.map((product) => (subtotal += (product.price*product.qtd)))

    let subtotal01 = subtotal.toLocaleString('pt-BR', { maximumFractionDigits: 2 } )

    let frete = (subtotal * 0.1).toLocaleString('pt-BR', { maximumFractionDigits: 2 } );

    let total = (subtotal + (subtotal * 0.1)).toLocaleString('pt-BR', { maximumFractionDigits: 2 } );


    return (
        <>
            <main className='cart_container' >
                <div className='cart_body'>
                    <h1 className='cart_title'>SEU CARRINHO</h1>
                    <div className='cart_info'>
                        <div className='cart_product'>
                            <div className='cart_attribute'>
                                <p className='cart_att_product'>PRODUTO</p>
                                <p>PREÇO</p>
                                <p>QUANTIDADE</p>
                                <p>TOTAL</p>
                            </div>
                            <div className='cart_card_all'>
                                <ul>
                                    {productsCart.map((product) =>
                                    (
                                        <li>
                                            <div className='cart_card'>
                                                <div className='cart_about'>
                                                    <div>
                                                        <img className='cart_image' src={product.image} alt={product.title} /></div>
                                                    <div className='cart_text'>
                                                        <p> TÍTULO: {product.title}</p>
                                                        <p>IDIOMA: {product.language}</p>
                                                        <p>IDADE: {product.age}</p>
                                                    </div>
                                                </div>
                                                <div className='cart_info_price'>
                                                    <div className='cart_unit_price'><p>{(product.price).toLocaleString('pt-BR', { maximumFractionDigits: 2 } )}</p></div>
                                                    <div className='cart_unit'>
                                                        <div className='cart_unit_button'>
                                                            <button id='button_increment' onClick={() => { removeProductsCart(product.id) }}>&lt;</button>
                                                            <p id='number'>{product.qtd}</p>
                                                            <button id='button_decrement' onClick={() => { addProducToCart(product.id) }}>&gt;</button>
                                                        </div>
                                                    </div>
                                                    <div className='cart_unit_price'><p>{((product.price) * (product.qtd)).toLocaleString('pt-BR', { maximumFractionDigits: 2 } )}</p></div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>

                        <div className='cart_price'>
                            <div className='cart_price_info'>
                                <p>FRETE:</p><p>{frete}</p>
                            </div>
                            <div className='cart_price_info'>
                                <p>SUBTOTAL:</p><p> {subtotal01}</p>
                            </div>
                            <div id='cart_price_total' className='cart_price_info'>

                                <p>TOTAL:</p><p>{total}</p>
                            </div>
                            <div className='cart_price_button'>
                                <Link to={'/categories'}><button id='button_back'>VOLTAR AO CATÁLOGO</button></Link>
                                <Link to={'/cart/finish'}><button id='button_finish'>FINALIZAR PEDIDO</button></Link>
                            </div>
                        </div>

                    </div>
                </div>

            </main>
        </>

    );
}