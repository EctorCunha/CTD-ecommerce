import './cart.css'
import { FiTrash } from "react-icons/fi";
import { Link } from 'react-router-dom'
import { useState } from "react";

export default function Cart() {

    const [number, setNumber] = useState(1);

    function increment() {
        setNumber(number + 1);
    }

    function decrement() {
        setNumber(number - 1);
    }

    return (
        <>
            <div className='cart_container' >
                <div className='cart_body'>
                    <div className='cart_title'>
                        <h1>SEU CARRINHO</h1>
                    </div>
                    <div className='cart_info'>
                        <div className='cart_product'>
                            <div className='cart_attribute'>
                                <p className='cart_att_product'>PRODUTO</p>
                                <p>PREÇO</p>
                                <p>QUANTIDADE</p>
                                <p>TOTAL</p>
                            </div>
                            <div className='cart_card'>
                                <div className='cart_about'>
                                    <div className='cart_image'>
                                        <div>Image</div></div>
                                    <div className='cart_text'>
                                        <p>TÍTULO:</p>
                                        <p>IDIOMA:</p>
                                        <p>IDADE:</p>
                                    </div>
                                </div>
                                <div className='cart_unit_price'><p>Preço</p></div>
                                <div className='cart_unit'>
                                    <div className='cart_unit_button'>
                                    <button id='button_increment' onClick={decrement}>&lt;</button>
                                    <p id='number'>{number}</p>
                                    <button id='button_decrement' onClick={increment}>&gt;</button>
                                    </div>
                                </div>
                                <div className='cart_unit_price'><p>PreçoX</p></div>
                                <div><FiTrash size={30} color="#cf4492" /></div>
                            </div>
                            <div className='cart_card'>
                                <div className='cart_about'>
                                    <div className='cart_image'>
                                        <div>Image</div></div>
                                    <div className='cart_text'>
                                        <p>TÍTULO:</p>
                                        <p>IDIOMA:</p>
                                        <p>IDADE:</p>
                                    </div>
                                </div>
                                <div className='cart_unit_price'><p>Preço</p></div>
                                <div className='cart_unit'>
                                    <div className='cart_unit_button'>
                                    <button id='button_increment' onClick={decrement}>&lt;</button>
                                    <p id='number'>{number}</p>
                                    <button id='button_decrement' onClick={increment}>&gt;</button>
                                    </div>
                                </div>
                                <div className='cart_unit_price'><p>PreçoX</p></div>
                                <div><FiTrash size={30} color="#cf4492" /></div>
                            </div>
                            <div className='cart_card'>
                                <div className='cart_about'>
                                    <div className='cart_image'>
                                        <div>Image</div></div>
                                    <div className='cart_text'>
                                        <p>TÍTULO:</p>
                                        <p>IDIOMA:</p>
                                        <p>IDADE:</p>
                                    </div>
                                </div>
                                <div className='cart_unit_price'><p>Preço</p></div>
                                <div className='cart_unit'>
                                    <div className='cart_unit_button'>
                                    <button id='button_increment' onClick={decrement}>&lt;</button>
                                    <p id='number'>{number}</p>
                                    <button id='button_decrement' onClick={increment}>&gt;</button>
                                    </div>
                                </div>
                                <div className='cart_unit_price'><p>PreçoX</p></div>
                                <div><FiTrash size={30} color="#cf4492" /></div>
                            </div>
                            <div className='cart_card'>
                                <div className='cart_about'>
                                    <div className='cart_image'>
                                        <div>Image</div></div>
                                    <div className='cart_text'>
                                        <p>TÍTULO:</p>
                                        <p>IDIOMA:</p>
                                        <p>IDADE:</p>
                                    </div>
                                </div>
                                <div className='cart_unit_price'><p>Preço</p></div>
                                <div className='cart_unit'>
                                    <div className='cart_unit_button'>
                                    <button id='button_increment' onClick={decrement}>&lt;</button>
                                    <p id='number'>{number}</p>
                                    <button id='button_decrement' onClick={increment}>&gt;</button>
                                    </div>
                                </div>
                                <div className='cart_unit_price'><p>PreçoX</p></div>
                                <div><FiTrash size={30} color="#cf4492" /></div>
                            </div>
                            <div className='cart_card'>
                                <div className='cart_about'>
                                    <div className='cart_image'>
                                        <div>Image</div></div>
                                    <div className='cart_text'>
                                        <p>TÍTULO:</p>
                                        <p>IDIOMA:</p>
                                        <p>IDADE:</p>
                                    </div>
                                </div>
                                <div className='cart_unit_price'><p>Preço</p></div>
                                <div className='cart_unit'>
                                    <div className='cart_unit_button'>
                                    <button id='button_increment' onClick={decrement}>&lt;</button>
                                    <p id='number'>{number}</p>
                                    <button id='button_decrement' onClick={increment}>&gt;</button>
                                    </div>
                                </div>
                                <div className='cart_unit_price'><p>PreçoX</p></div>
                                <div><FiTrash size={30} color="#cf4492" /></div>
                            </div>
                            
                        </div>
                        <div className='cart_price'>
                            <div className='cart_price_info'>
                                <p>FRETE:</p><p> R$19,99</p>
                            </div>
                            <div className='cart_price_info'>
                                <p>SUBTOTAL:</p><p> R$1.019,99</p>
                            </div>
                            <div id='cart_price_total' className='cart_price_info'>
                                <p>TOTAL:</p><p> R$1.039,99</p>
                            </div>
                            <div className='cart_price_button'>
                                <Link to={'/categories'}><button id='button_back'>VOLTAR AO CATÁLOGO</button></Link>
                                <Link to={'/cart/finish'}><button id='button_finish'>FINALIZAR PEDIDO</button></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}