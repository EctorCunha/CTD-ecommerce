import './cart.css'
import { Link } from 'react-router-dom'
import React, { useContext } from "react"
import { CartContext } from "../../Context/cart"
import emptyCart from "../../Assets/Cart/icon-cart-empty.svg"
import { FiTrash } from "react-icons/fi";
import { HashLink} from 'react-router-hash-link';


export default function Cart() {
    const { productsCart, addProducToCart, removeProductsCart, deleteProductsCart, cleanList } = useContext(CartContext);

    let subtotal = 0;
    productsCart.map((product) => (subtotal += (product.price * product.qtd)))

    let subtotal01 = subtotal.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 })

    let frete = (subtotal * 0.1).toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 });

    let total = (subtotal + (subtotal * 0.1)).toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 });

    function finallyCart(){
        if(productsCart.length>0){
            return "/cart/finish"
        } else{
            return "/cart"
        }
    }

    return (
        <>
            <main className='cart_container' >
                <div className='cart_body'>
                    <h1 className='cart_title'>SEU CARRINHO</h1>
                    <div className='cart_info'>
                        <div className='cart_product'>
                            <div className='cart_attribute'>
                                <div className='cart_att' id='cart_att_product'>
                                    <p>PRODUTO</p>
                                </div>
                                <div className='cart_att'>
                                    <p>PREÇO</p>
                                </div>
                                <div className='cart_att'>
                                    <p>QUANTIDADE</p>
                                </div>
                                <div className='cart_att'>
                                    <p>TOTAL</p>
                                </div>
                                <div className='cart_att'>
                                    <p>EXCLUIR</p>
                                </div>
                            </div>
                            <div className='cart_card_all'>
                                <ul>
                                    {productsCart.map(

                                        (product) =>
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
                                                        <div className='cart_unit_price'><p>{(product.price).toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}</p></div>
                                                        <div className='cart_unit'>
                                                            <div className='cart_unit_button'>
                                                                <button id='button_increment' onClick={() => { removeProductsCart(product.id) }}>&lt;</button>
                                                                <p id='number'>{product.qtd}</p>
                                                                <button id='button_decrement' onClick={() => { addProducToCart(product.id) }}>&gt;</button>
                                                            </div>
                                                        </div>
                                                        <div className='cart_unit_price'><p>{((product.price) * (product.qtd)).toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}</p></div>
                                                        <button id='button_delete'><FiTrash size={20} color="#cf4492" onClick={() => deleteProductsCart(product.id)}/></button>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                </ul>
                                {(productsCart.length === 0) ?
                                    <div className="cart_empty_container">
                                        <img src={emptyCart} alt="icon empty cart" />
                                        <p>carrinho vazio</p>
                                    </div>
                                    : <div></div>}
                            </div>
                            <button id="button_clean" onClick={cleanList}> LIMPAR LISTA</button>
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
                             <HashLink to={"/allgames"}><button id='button_back'>ADICIONAR JOGO</button></HashLink>
                             <Link to={finallyCart()}><button id='button_finish' onClick={cleanList}>FINALIZAR PEDIDO</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>

    );
}