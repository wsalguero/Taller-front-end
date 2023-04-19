import React from 'react'
import Hoteles from './Hoteles'

export const Principal = () => {
    return (
        <>
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                       { /*<img class="logo horizontal-logo" src="" alt=" " />*/}

                    </a>
                    <h2 className='text-white'>Traveling</h2>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Ofertas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://www.facebook.com">Login</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Menú
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                                    <a class="dropdown-item" href="#">Mis viajes</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Ayuda y Asistencia</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Cerrar Sesión</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    USD
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown3">
                                    <h6>Más usados</h6>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">USD - Dolar E.U</a>
                                    <a class="dropdown-item" href="#">EU - Euro</a>
                                    <a class="dropdown-item" href="#">GBP - Libra Esterlina</a>
                                    <div class="dropdown-divider"></div>
                                    <h6>Más Divisas</h6>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"></a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Busca tu destino" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                                <span class="glyphicon glyphicon-search"></span>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

            <div>
                <Hoteles />
            </div>

        </>

    )
}

