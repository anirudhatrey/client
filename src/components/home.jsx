import React from "react";
import Header from "./header";
export default function Home(props){
    return(<>
        <div className="bg-white w-full">
            <div className="header h-16 bg-gray-900 flex items-center">
                <div className="logo w-1/5 h-16 ml-10 ">
                    <img className="w-28 h-16 object-contain"   src="https://www.pinclipart.com/picdir/big/57-576184_view-our-amazon-storefront-amazon-logo-white-png.png" />
                </div>
                <input className="h-9 w-30 bg-gray-800 border border-gray-500 border-opacity-75 rounded-l-xl px-3 text-white ml-6 focus:outline-none placeholder-white" id="search" type="text" placeholder="Search..."/>
                <div className="categories h-9 w-30 bg-gray-800 border border-gray-500 border-opacity-75 px-3 text-white flex items-center ">
                    categories
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                <div className="search-icon h-9 w-10 bg-yellow-500 rounded-r-xl flex justify-center items-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                </div>
             
                <div className="icons text-white flex items-center ml-auto mr-8 w-48 h-16 justify-around" >
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    
                        <a href="cart.html">
                            <div className="cart-icon relative h-10 w-10 bg-yellow-500 flex items-center justify-center rounded-xl">
                                <div className="cart-item-number text-gray-800 text-xs absolute -top-1 -right-1 h-4 w-4 bg-white rounded-full flex justify-center items-center"></div>
                                <svg className="h-4 w-4 text-gray-600" xmlns="http://owww.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                        </a>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                      <svg className="rounded h-12 w-12" data-jdenticon-value="Jessy"></svg>
                </div>
            </div>
            <div className="main h-screen flex">
                <div className="hidden md:block border-t-2 border-gray-700 main-sidebar w-1/5 bg-gray-900 p-6">
                    <div className="sidebar-categories">
                        <div className="sidebar-main-category text-yellow-500 cursor-pointer flex font-bold p-2 bg-gray-700 rounded-lg">
                            <span className="w-8">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                            </span>
                            <span>Categories</span>
                        </div>
                        <div className="sidebar-main-category text-white cursor-pointer flex font-bold p-2">
                            <span className="w-8"></span>
                            <span>Echo and Alexa</span>
                        </div>
                        <div className="sidebar-main-category text-white cursor-pointer flex font-bold p-2">
                            <span className="w-8"></span>
                            <span>Kindle</span>
                        </div>
                        <div className="sidebar-main-category text-white cursor-pointer flex font-bold p-2">
                            <span className="w-8"></span>
                            <span>Books</span>
                        </div>
                        <div className="sidebar-main-category text-white cursor-pointer flex font-bold p-2 mb-2">
                            <span className="w-8"></span>
                            <span>Electronics</span>
                        </div>
                        <div className="sidebar-main-category text-white cursor-pointer flex font-bold p-2">
                            <span className="w-8"></span>
                            <span>Home and Garden</span>
                        </div>
                        <div className="sidebar-main-category text-white cursor-pointer flex font-bold p-2">
                            <span className="w-8"></span>
                            <span>Fashion</span>
                        </div>
                        <div className="sidebar-main-category text-white cursor-pointer flex font-bold p-2 hover:bg-gray-700 rounded-xl mb-4">
                            <span className="w-8">
                                <i className="fas fa-percent"></i>
                            </span>
                            <span>Sell on Amazon</span>
                        </div>
                        <div className="sidebar-main-category text-white cursor-pointer flex font-bold p-2 hover:bg-gray-700 rounded-xl ">
                            <span className="w-8">
                                <i className="far fa-question-circle"></i>
                            </span>
                            <span>Help</span>
                        </div>
                    </div>
                </div>
                <div className="main-section flex-1 p-6 bg-gray-100">
                    <div className="main-section-banner h-44 rounded-lg flex items-end">
                        <div className="button bg-white w-36 h-10 rounded-full flex justify-center items-center m-4 cursor-pointer">
                            <h4 className="text-bold text-yellow-500">Browse Products</h4>
                        </div>
                    </div>
                    <div className="main-section-categories mt-10 ">
                        <h1 className="popular-categories font-bold text-gray-700 text-2xl flex items-center">
                            Popular Categories
                            <svg className="h-6 w-6 text-yellow-400"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                        </h1>
                        <div className="categories flex flex-wrap">
                            <div className="icon-desktop h-20 w-20 bg-white rounded-xl flex justify-center items-center mt-5 mr-6">
                                <svg className="h-12 w-12 text-gray-500" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="icon-gift h-20 w-20 bg-white rounded-xl flex justify-center items-center mt-5 mr-6">
                                <svg className="h-12 w-12 text-gray-500" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                </svg>
                            </div>
                            <div className="icon-mobile h-20 w-20 bg-white rounded-xl flex justify-center items-center mt-5 mr-6">
                                <svg className="h-12 w-12 text-gray-500" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                  </svg>
                            </div>
                            <div className="icon-book h-20 w-20 bg-white rounded-xl flex justify-center items-center mt-5 mr-6">
                                <svg className="h-12 w-12 text-gray-500" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                  </svg>
                            </div>
                            <div className="icon-camera h-20 w-20 bg-white rounded-xl flex justify-center items-center mt-5 mr-6">
                                <svg className="h-12 w-12 text-gray-500" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                            </div>
                            <div className="icon-home h-20 w-20 bg-white rounded-xl flex justify-center items-center mt-5 mr-6">
                                <svg className="h-12 w-12 text-gray-500" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                  </svg>
                            </div>
                            <div className="icon-music h-20 w-20 bg-white rounded-xl flex justify-center items-center mt-5 mr-6">
                                <svg className="h-12 w-12 text-gray-500" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                                  </svg>
                            </div>
                            <div className="icon-lightbulb h-20 w-20 bg-white rounded-xl mt-5 mr-6 flex justify-center items-center">
                                <svg className="h-12 w-12 text-gray-500" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="main-section-deals mt-5">
                        <h1 className="text-2xl font-bold text-gray-700 mb-5">Hot Deals 🔥</h1>
                        <div className="main-section-products flex">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
        
    );
}