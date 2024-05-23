import React, { useRef } from 'react'
import {motion , useScroll ,useSpring, useTransform} from 'framer-motion'
import UseIsMobile from '../hooks/UseIsMouse'
import { Link } from 'react-router-dom';

const items = [
    {
      id: 1,
      title: "Logo Designs",
      img: "https://drive.google.com/thumbnail?id=1HLsXlOX6bFxjDyyxSdWvsiRvPvEYw5O_&sz=w1000",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      imageInfo: {
        title: "Logo Designs",
        images : [
          { src: "https://drive.google.com/thumbnail?id=1hFdqhUhAxImuft2NwFEnGNxbVeiuoCnY&sz=w1000", alt: "1" },
          { src: "https://drive.google.com/thumbnail?id=1Ul_TFNYxxmQgKK9mnNz3yqeJaSi_6XCJ&sz=w1000", alt: "2" },
          { src: "https://drive.google.com/thumbnail?id=1Tq2KE9Ao1H_qgbpPQYd26dvLEFTCGUF9&sz=w1000", alt: "3" },
          { src: "https://drive.google.com/thumbnail?id=1vSqfBR6EJJiNOwfOglBRoROh3627EGHU&sz=w1000", alt: "4" },
          { src: "https://drive.google.com/thumbnail?id=1lZDBXE8R0GB_Ifee2NbObfGRj8bQbW5_&sz=w1000", alt: "5" },
          { src: "https://drive.google.com/thumbnail?id=1nwTTagHcOX01H3y53IMlpk0kKfDEdkT7&sz=w1000", alt: "6" },
          { src: "https://drive.google.com/thumbnail?id=1csc5jkLTMpKB4-iReIeC4IY-jeuRI59g&sz=w1000", alt: "7" },
          { src: "https://drive.google.com/thumbnail?id=1vPsLtGNe16kqDtv7cng3fzSlJiZV93TH&sz=w1000", alt: "8" },
          { src: "https://drive.google.com/thumbnail?id=1_Z7tW0ZqZNnzCyOjq4Kk_2xCZUG9Q7oJ&sz=w1000", alt: "9" },
          { src: "https://drive.google.com/thumbnail?id=13loW6wm3UW4t3ip9eG6mn7mpgCu59g8Q&sz=w1000", alt: "10" },
          { src: "https://drive.google.com/thumbnail?id=1gb_RIjWR_kkaOlEJTnoVVAYxABRjWeHa&sz=w1000", alt: "11" },
          { src: "https://drive.google.com/thumbnail?id=1juJU9yE3XWIN6PlIIRYbM2MXWmbz3a4d&sz=w1000", alt: "12" },
          { src: "https://drive.google.com/thumbnail?id=1ruQJtilm_ddAli4YWcws-6KdP6CswDA5&sz=w1000", alt: "13" },
          { src: "https://drive.google.com/thumbnail?id=1-1c_-psxZ-NgvlUCNWdvXUf855EMx5G4&sz=w1000", alt: "14" },
        ]
      },
    },
    {
      id: 2,
      title: "Business Cards",
      img: "https://drive.google.com/thumbnail?id=1qieJbq4dTWLwKSLzI1pkU4UVvvt6WnMv&sz=w1000",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      imageInfo: {
        title: "Business Cards", 
        images : [
          { src: "https://drive.google.com/thumbnail?id=1g-Ijwf1kxVKB0KUIKTQtAw327agdH-sO&sz=w1000", alt: "1" },
          { src: "https://drive.google.com/thumbnail?id=1TtbDjXWF8wcGtdMkP-UAKoI2uZIDkg-o&sz=w1000", alt: "2" },
          { src: "https://drive.google.com/thumbnail?id=1DiRkPjtyax0ER3fZqVSbsqocyUeYr8h4&sz=w1000", alt: "3" },
          { src: "https://drive.google.com/thumbnail?id=1LowIoF4IdAKHFdsGlyBkAOhtphrQItzL&sz=w1000", alt: "4" },
          { src: "https://drive.google.com/thumbnail?id=1g00-iOUMGP-mSnNE6PRwSNY2jUeW82UF&sz=w1000", alt: "5" },
          { src: "https://drive.google.com/thumbnail?id=1NRUrYS0ZzVG2n_r3rk4MVgkl-UotkZjx&sz=w1000", alt: "6" },
          { src: "https://drive.google.com/thumbnail?id=1WiSlPKqfaeeOFY5xUdln6VtvuWubtxnf&sz=w1000", alt: "7" },
          { src: "https://drive.google.com/thumbnail?id=1lCpyeJv6j2bBKP_lz8CcsfgdyjoUVqE4&sz=w1000", alt: "8" },
          { src: "https://drive.google.com/thumbnail?id=1FxmbEaTBxNNht2lOztDUsYOnrDVg7SS4&sz=w1000", alt: "9" },
          { src: "https://drive.google.com/thumbnail?id=1z_xUfeP_YHGWpy_XXAt3PIjUy6rCoqgc&sz=w1000", alt: "10" },
          { src: "https://drive.google.com/thumbnail?id=1W1k1y2ep0jGVkNSwovZnKW-lBjZfw7KQ&sz=w1000", alt: "11" },
        ]
      },
    },
    {
      id: 3,
      title: "Letter Head",
      img: "https://drive.google.com/thumbnail?id=1m8bR7D6ZMCdvky3nuABEtJXYG3oqk2rU&sz=w1000",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      imageInfo: {
        title: "Letter Head",
        images : [
          { src: "https://drive.google.com/thumbnail?id=1hFdqhUhAxImuft2NwFEnGNxbVeiuoCnY&sz=w1000", alt: "1" },
          { src: "https://drive.google.com/thumbnail?id=1Ul_TFNYxxmQgKK9mnNz3yqeJaSi_6XCJ&sz=w1000", alt: "2" },
          { src: "https://drive.google.com/thumbnail?id=1Tq2KE9Ao1H_qgbpPQYd26dvLEFTCGUF9&sz=w1000", alt: "3" },
          { src: "https://drive.google.com/thumbnail?id=1vSqfBR6EJJiNOwfOglBRoROh3627EGHU&sz=w1000", alt: "4" },
          { src: "https://drive.google.com/thumbnail?id=1lZDBXE8R0GB_Ifee2NbObfGRj8bQbW5_&sz=w1000", alt: "5" },
          { src: "https://drive.google.com/thumbnail?id=1nwTTagHcOX01H3y53IMlpk0kKfDEdkT7&sz=w1000", alt: "6" },
          { src: "https://drive.google.com/thumbnail?id=1csc5jkLTMpKB4-iReIeC4IY-jeuRI59g&sz=w1000", alt: "7" },
          { src: "https://drive.google.com/thumbnail?id=1vPsLtGNe16kqDtv7cng3fzSlJiZV93TH&sz=w1000", alt: "8" },
          { src: "https://drive.google.com/thumbnail?id=1_Z7tW0ZqZNnzCyOjq4Kk_2xCZUG9Q7oJ&sz=w1000", alt: "9" },
          { src: "https://drive.google.com/thumbnail?id=13loW6wm3UW4t3ip9eG6mn7mpgCu59g8Q&sz=w1000", alt: "10" },
          { src: "https://drive.google.com/thumbnail?id=1gb_RIjWR_kkaOlEJTnoVVAYxABRjWeHa&sz=w1000", alt: "11" },
          { src: "https://drive.google.com/thumbnail?id=1juJU9yE3XWIN6PlIIRYbM2MXWmbz3a4d&sz=w1000", alt: "12" },
          { src: "https://drive.google.com/thumbnail?id=1ruQJtilm_ddAli4YWcws-6KdP6CswDA5&sz=w1000", alt: "13" },
          { src: "https://drive.google.com/thumbnail?id=1-1c_-psxZ-NgvlUCNWdvXUf855EMx5G4&sz=w1000", alt: "14" },
        ]
      },
    },
    {
      id: 4,
      title: "Social Media Post",
      img: "https://drive.google.com/thumbnail?id=1aBCCEF-Wlmm_h-Oz7F3GF9h0tkpiSTVz&sz=w1000",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      imageInfo: {
        title: "Social Media Post",
        images : [
          { src: "https://drive.google.com/thumbnail?id=1hFdqhUhAxImuft2NwFEnGNxbVeiuoCnY&sz=w1000", alt: "1" },
          { src: "https://drive.google.com/thumbnail?id=1Ul_TFNYxxmQgKK9mnNz3yqeJaSi_6XCJ&sz=w1000", alt: "2" },
          { src: "https://drive.google.com/thumbnail?id=1Tq2KE9Ao1H_qgbpPQYd26dvLEFTCGUF9&sz=w1000", alt: "3" },
          { src: "https://drive.google.com/thumbnail?id=1vSqfBR6EJJiNOwfOglBRoROh3627EGHU&sz=w1000", alt: "4" },
          { src: "https://drive.google.com/thumbnail?id=1lZDBXE8R0GB_Ifee2NbObfGRj8bQbW5_&sz=w1000", alt: "5" },
          { src: "https://drive.google.com/thumbnail?id=1nwTTagHcOX01H3y53IMlpk0kKfDEdkT7&sz=w1000", alt: "6" },
          { src: "https://drive.google.com/thumbnail?id=1csc5jkLTMpKB4-iReIeC4IY-jeuRI59g&sz=w1000", alt: "7" },
          { src: "https://drive.google.com/thumbnail?id=1vPsLtGNe16kqDtv7cng3fzSlJiZV93TH&sz=w1000", alt: "8" },
          { src: "https://drive.google.com/thumbnail?id=1_Z7tW0ZqZNnzCyOjq4Kk_2xCZUG9Q7oJ&sz=w1000", alt: "9" },
          { src: "https://drive.google.com/thumbnail?id=13loW6wm3UW4t3ip9eG6mn7mpgCu59g8Q&sz=w1000", alt: "10" },
          { src: "https://drive.google.com/thumbnail?id=1gb_RIjWR_kkaOlEJTnoVVAYxABRjWeHa&sz=w1000", alt: "11" },
          { src: "https://drive.google.com/thumbnail?id=1juJU9yE3XWIN6PlIIRYbM2MXWmbz3a4d&sz=w1000", alt: "12" },
          { src: "https://drive.google.com/thumbnail?id=1ruQJtilm_ddAli4YWcws-6KdP6CswDA5&sz=w1000", alt: "13" },
          { src: "https://drive.google.com/thumbnail?id=1-1c_-psxZ-NgvlUCNWdvXUf855EMx5G4&sz=w1000", alt: "14" },
        ]
      },
    },
    {
      id: 5,
      title: "Dangler",
      img: "https://drive.google.com/thumbnail?id=1p95mPzklfPhm0vz7AUgwdOem6JWY09Qp&sz=w1000",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      imageInfo: {
        title: "Dangler",
        images : [
          { src: "https://drive.google.com/thumbnail?id=1hFdqhUhAxImuft2NwFEnGNxbVeiuoCnY&sz=w1000", alt: "1" },
          { src: "https://drive.google.com/thumbnail?id=1Ul_TFNYxxmQgKK9mnNz3yqeJaSi_6XCJ&sz=w1000", alt: "2" },
          { src: "https://drive.google.com/thumbnail?id=1Tq2KE9Ao1H_qgbpPQYd26dvLEFTCGUF9&sz=w1000", alt: "3" },
          { src: "https://drive.google.com/thumbnail?id=1vSqfBR6EJJiNOwfOglBRoROh3627EGHU&sz=w1000", alt: "4" },
          { src: "https://drive.google.com/thumbnail?id=1lZDBXE8R0GB_Ifee2NbObfGRj8bQbW5_&sz=w1000", alt: "5" },
          { src: "https://drive.google.com/thumbnail?id=1nwTTagHcOX01H3y53IMlpk0kKfDEdkT7&sz=w1000", alt: "6" },
          { src: "https://drive.google.com/thumbnail?id=1csc5jkLTMpKB4-iReIeC4IY-jeuRI59g&sz=w1000", alt: "7" },
          { src: "https://drive.google.com/thumbnail?id=1vPsLtGNe16kqDtv7cng3fzSlJiZV93TH&sz=w1000", alt: "8" },
          { src: "https://drive.google.com/thumbnail?id=1_Z7tW0ZqZNnzCyOjq4Kk_2xCZUG9Q7oJ&sz=w1000", alt: "9" },
          { src: "https://drive.google.com/thumbnail?id=13loW6wm3UW4t3ip9eG6mn7mpgCu59g8Q&sz=w1000", alt: "10" },
          { src: "https://drive.google.com/thumbnail?id=1gb_RIjWR_kkaOlEJTnoVVAYxABRjWeHa&sz=w1000", alt: "11" },
          { src: "https://drive.google.com/thumbnail?id=1juJU9yE3XWIN6PlIIRYbM2MXWmbz3a4d&sz=w1000", alt: "12" },
          { src: "https://drive.google.com/thumbnail?id=1ruQJtilm_ddAli4YWcws-6KdP6CswDA5&sz=w1000", alt: "13" },
          { src: "https://drive.google.com/thumbnail?id=1-1c_-psxZ-NgvlUCNWdvXUf855EMx5G4&sz=w1000", alt: "14" },
        ]
      },
    },
    {
      id: 6,
      title: "Flyier",
      img: "https://drive.google.com/thumbnail?id=1qOfPAzIvUny52--64vVuf8B_B6uTVSA5&sz=w1000",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      imageInfo: {
        title: "Flyier",
        images : [
          { src: "https://drive.google.com/thumbnail?id=1hFdqhUhAxImuft2NwFEnGNxbVeiuoCnY&sz=w1000", alt: "1" },
          { src: "https://drive.google.com/thumbnail?id=1Ul_TFNYxxmQgKK9mnNz3yqeJaSi_6XCJ&sz=w1000", alt: "2" },
          { src: "https://drive.google.com/thumbnail?id=1Tq2KE9Ao1H_qgbpPQYd26dvLEFTCGUF9&sz=w1000", alt: "3" },
          { src: "https://drive.google.com/thumbnail?id=1vSqfBR6EJJiNOwfOglBRoROh3627EGHU&sz=w1000", alt: "4" },
          { src: "https://drive.google.com/thumbnail?id=1lZDBXE8R0GB_Ifee2NbObfGRj8bQbW5_&sz=w1000", alt: "5" },
          { src: "https://drive.google.com/thumbnail?id=1nwTTagHcOX01H3y53IMlpk0kKfDEdkT7&sz=w1000", alt: "6" },
          { src: "https://drive.google.com/thumbnail?id=1csc5jkLTMpKB4-iReIeC4IY-jeuRI59g&sz=w1000", alt: "7" },
          { src: "https://drive.google.com/thumbnail?id=1vPsLtGNe16kqDtv7cng3fzSlJiZV93TH&sz=w1000", alt: "8" },
          { src: "https://drive.google.com/thumbnail?id=1_Z7tW0ZqZNnzCyOjq4Kk_2xCZUG9Q7oJ&sz=w1000", alt: "9" },
          { src: "https://drive.google.com/thumbnail?id=13loW6wm3UW4t3ip9eG6mn7mpgCu59g8Q&sz=w1000", alt: "10" },
          { src: "https://drive.google.com/thumbnail?id=1gb_RIjWR_kkaOlEJTnoVVAYxABRjWeHa&sz=w1000", alt: "11" },
          { src: "https://drive.google.com/thumbnail?id=1juJU9yE3XWIN6PlIIRYbM2MXWmbz3a4d&sz=w1000", alt: "12" },
          { src: "https://drive.google.com/thumbnail?id=1ruQJtilm_ddAli4YWcws-6KdP6CswDA5&sz=w1000", alt: "13" },
          { src: "https://drive.google.com/thumbnail?id=1-1c_-psxZ-NgvlUCNWdvXUf855EMx5G4&sz=w1000", alt: "14" },
        ]
      },
    },
    {
      id: 7,
      title: "Brouchers",
      img: "https://drive.google.com/thumbnail?id=1EaQY1PlbckKLKfaMk_UrlfYbaWwIJJw8&sz=w1000",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      imageInfo: {
        title: "Brouchers",
        images : [
          { src: "https://drive.google.com/thumbnail?id=1hFdqhUhAxImuft2NwFEnGNxbVeiuoCnY&sz=w1000", alt: "1" },
          { src: "https://drive.google.com/thumbnail?id=1Ul_TFNYxxmQgKK9mnNz3yqeJaSi_6XCJ&sz=w1000", alt: "2" },
          { src: "https://drive.google.com/thumbnail?id=1Tq2KE9Ao1H_qgbpPQYd26dvLEFTCGUF9&sz=w1000", alt: "3" },
          { src: "https://drive.google.com/thumbnail?id=1vSqfBR6EJJiNOwfOglBRoROh3627EGHU&sz=w1000", alt: "4" },
          { src: "https://drive.google.com/thumbnail?id=1lZDBXE8R0GB_Ifee2NbObfGRj8bQbW5_&sz=w1000", alt: "5" },
          { src: "https://drive.google.com/thumbnail?id=1nwTTagHcOX01H3y53IMlpk0kKfDEdkT7&sz=w1000", alt: "6" },
          { src: "https://drive.google.com/thumbnail?id=1csc5jkLTMpKB4-iReIeC4IY-jeuRI59g&sz=w1000", alt: "7" },
          { src: "https://drive.google.com/thumbnail?id=1vPsLtGNe16kqDtv7cng3fzSlJiZV93TH&sz=w1000", alt: "8" },
          { src: "https://drive.google.com/thumbnail?id=1_Z7tW0ZqZNnzCyOjq4Kk_2xCZUG9Q7oJ&sz=w1000", alt: "9" },
          { src: "https://drive.google.com/thumbnail?id=13loW6wm3UW4t3ip9eG6mn7mpgCu59g8Q&sz=w1000", alt: "10" },
          { src: "https://drive.google.com/thumbnail?id=1gb_RIjWR_kkaOlEJTnoVVAYxABRjWeHa&sz=w1000", alt: "11" },
          { src: "https://drive.google.com/thumbnail?id=1juJU9yE3XWIN6PlIIRYbM2MXWmbz3a4d&sz=w1000", alt: "12" },
          { src: "https://drive.google.com/thumbnail?id=1ruQJtilm_ddAli4YWcws-6KdP6CswDA5&sz=w1000", alt: "13" },
          { src: "https://drive.google.com/thumbnail?id=1-1c_-psxZ-NgvlUCNWdvXUf855EMx5G4&sz=w1000", alt: "14" },
        ]
      },
    },
    {
      id: 8,
      title: "News Paper Artical",
      img: "https://drive.google.com/thumbnail?id=1D7DMbX-PLBiKHl2cWiHMbSqewQmETP5L&sz=w1000",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      imageInfo: {
        title: "News Paper Artical",
        images : [
          { src: "https://drive.google.com/thumbnail?id=1hFdqhUhAxImuft2NwFEnGNxbVeiuoCnY&sz=w1000", alt: "1" },
          { src: "https://drive.google.com/thumbnail?id=1Ul_TFNYxxmQgKK9mnNz3yqeJaSi_6XCJ&sz=w1000", alt: "2" },
          { src: "https://drive.google.com/thumbnail?id=1Tq2KE9Ao1H_qgbpPQYd26dvLEFTCGUF9&sz=w1000", alt: "3" },
          { src: "https://drive.google.com/thumbnail?id=1vSqfBR6EJJiNOwfOglBRoROh3627EGHU&sz=w1000", alt: "4" },
          { src: "https://drive.google.com/thumbnail?id=1lZDBXE8R0GB_Ifee2NbObfGRj8bQbW5_&sz=w1000", alt: "5" },
          { src: "https://drive.google.com/thumbnail?id=1nwTTagHcOX01H3y53IMlpk0kKfDEdkT7&sz=w1000", alt: "6" },
          { src: "https://drive.google.com/thumbnail?id=1csc5jkLTMpKB4-iReIeC4IY-jeuRI59g&sz=w1000", alt: "7" },
          { src: "https://drive.google.com/thumbnail?id=1vPsLtGNe16kqDtv7cng3fzSlJiZV93TH&sz=w1000", alt: "8" },
          { src: "https://drive.google.com/thumbnail?id=1_Z7tW0ZqZNnzCyOjq4Kk_2xCZUG9Q7oJ&sz=w1000", alt: "9" },
          { src: "https://drive.google.com/thumbnail?id=13loW6wm3UW4t3ip9eG6mn7mpgCu59g8Q&sz=w1000", alt: "10" },
          { src: "https://drive.google.com/thumbnail?id=1gb_RIjWR_kkaOlEJTnoVVAYxABRjWeHa&sz=w1000", alt: "11" },
          { src: "https://drive.google.com/thumbnail?id=1juJU9yE3XWIN6PlIIRYbM2MXWmbz3a4d&sz=w1000", alt: "12" },
          { src: "https://drive.google.com/thumbnail?id=1ruQJtilm_ddAli4YWcws-6KdP6CswDA5&sz=w1000", alt: "13" },
          { src: "https://drive.google.com/thumbnail?id=1-1c_-psxZ-NgvlUCNWdvXUf855EMx5G4&sz=w1000", alt: "14" },
        ]
      },
    },
    {
      id: 9,
      title: "Cover Page",
      img: "https://drive.google.com/thumbnail?id=1QdAHDV24IlgrM1V-X22Lx0GrOjG4FKzf&sz=w1000",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      imageInfo: {
        title: "Cover Page",
        images : [
          { src: "https://drive.google.com/thumbnail?id=1hFdqhUhAxImuft2NwFEnGNxbVeiuoCnY&sz=w1000", alt: "1" },
          { src: "https://drive.google.com/thumbnail?id=1Ul_TFNYxxmQgKK9mnNz3yqeJaSi_6XCJ&sz=w1000", alt: "2" },
          { src: "https://drive.google.com/thumbnail?id=1Tq2KE9Ao1H_qgbpPQYd26dvLEFTCGUF9&sz=w1000", alt: "3" },
          { src: "https://drive.google.com/thumbnail?id=1vSqfBR6EJJiNOwfOglBRoROh3627EGHU&sz=w1000", alt: "4" },
          { src: "https://drive.google.com/thumbnail?id=1lZDBXE8R0GB_Ifee2NbObfGRj8bQbW5_&sz=w1000", alt: "5" },
          { src: "https://drive.google.com/thumbnail?id=1nwTTagHcOX01H3y53IMlpk0kKfDEdkT7&sz=w1000", alt: "6" },
          { src: "https://drive.google.com/thumbnail?id=1csc5jkLTMpKB4-iReIeC4IY-jeuRI59g&sz=w1000", alt: "7" },
          { src: "https://drive.google.com/thumbnail?id=1vPsLtGNe16kqDtv7cng3fzSlJiZV93TH&sz=w1000", alt: "8" },
          { src: "https://drive.google.com/thumbnail?id=1_Z7tW0ZqZNnzCyOjq4Kk_2xCZUG9Q7oJ&sz=w1000", alt: "9" },
          { src: "https://drive.google.com/thumbnail?id=13loW6wm3UW4t3ip9eG6mn7mpgCu59g8Q&sz=w1000", alt: "10" },
          { src: "https://drive.google.com/thumbnail?id=1gb_RIjWR_kkaOlEJTnoVVAYxABRjWeHa&sz=w1000", alt: "11" },
          { src: "https://drive.google.com/thumbnail?id=1juJU9yE3XWIN6PlIIRYbM2MXWmbz3a4d&sz=w1000", alt: "12" },
          { src: "https://drive.google.com/thumbnail?id=1ruQJtilm_ddAli4YWcws-6KdP6CswDA5&sz=w1000", alt: "13" },
          { src: "https://drive.google.com/thumbnail?id=1-1c_-psxZ-NgvlUCNWdvXUf855EMx5G4&sz=w1000", alt: "14" },
        ]
      },
    },
    {
      id: 10,
      title: "UI and Web Template",
      img: "https://drive.google.com/thumbnail?id=1x2AK8ifz7sc3Z4iC31KTpoHJSYv4jl7Z&sz=w1000",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      imageInfo: {
        title: "UI and Web Template",
        images : [
          { src: "https://drive.google.com/thumbnail?id=1hFdqhUhAxImuft2NwFEnGNxbVeiuoCnY&sz=w1000", alt: "1" },
          { src: "https://drive.google.com/thumbnail?id=1Ul_TFNYxxmQgKK9mnNz3yqeJaSi_6XCJ&sz=w1000", alt: "2" },
          { src: "https://drive.google.com/thumbnail?id=1Tq2KE9Ao1H_qgbpPQYd26dvLEFTCGUF9&sz=w1000", alt: "3" },
          { src: "https://drive.google.com/thumbnail?id=1vSqfBR6EJJiNOwfOglBRoROh3627EGHU&sz=w1000", alt: "4" },
          { src: "https://drive.google.com/thumbnail?id=1lZDBXE8R0GB_Ifee2NbObfGRj8bQbW5_&sz=w1000", alt: "5" },
          { src: "https://drive.google.com/thumbnail?id=1nwTTagHcOX01H3y53IMlpk0kKfDEdkT7&sz=w1000", alt: "6" },
          { src: "https://drive.google.com/thumbnail?id=1csc5jkLTMpKB4-iReIeC4IY-jeuRI59g&sz=w1000", alt: "7" },
          { src: "https://drive.google.com/thumbnail?id=1vPsLtGNe16kqDtv7cng3fzSlJiZV93TH&sz=w1000", alt: "8" },
          { src: "https://drive.google.com/thumbnail?id=1_Z7tW0ZqZNnzCyOjq4Kk_2xCZUG9Q7oJ&sz=w1000", alt: "9" },
          { src: "https://drive.google.com/thumbnail?id=13loW6wm3UW4t3ip9eG6mn7mpgCu59g8Q&sz=w1000", alt: "10" },
          { src: "https://drive.google.com/thumbnail?id=1gb_RIjWR_kkaOlEJTnoVVAYxABRjWeHa&sz=w1000", alt: "11" },
          { src: "https://drive.google.com/thumbnail?id=1juJU9yE3XWIN6PlIIRYbM2MXWmbz3a4d&sz=w1000", alt: "12" },
          { src: "https://drive.google.com/thumbnail?id=1ruQJtilm_ddAli4YWcws-6KdP6CswDA5&sz=w1000", alt: "13" },
          { src: "https://drive.google.com/thumbnail?id=1-1c_-psxZ-NgvlUCNWdvXUf855EMx5G4&sz=w1000", alt: "14" },
        ]
      },
    },
];
  
const Single = ({ item }) => {
    const ref = useRef();
    const isMobile = UseIsMobile();

    const { scrollYProgress } = useScroll({
      target: ref,
    //   offset:["end end" , "start start"]
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
      <section  className='h-[100vh] flex items-center justify-center'>
        <div className="flex items-center justify-center overflow-hidden">
          <div className="max-w-[1200px] h-[100%] p-4 m-auto flex flex-col md:flex-row gap-[10px] md:gap-[50px] items-center justify-center">
            <div className="flex-1 h-[50%] " ref={ref}>
              <img src={item.img} className='md:w-[100%] md:h-[100%] object-cover' alt="iiii" loading='lazy' />
            </div>
            <motion.div className="flex-1  flex flex-col justify-center md:justify-normal items-center md:items-start gap-[10px] md:gap-[30px]" style={isMobile ? {} : { y }}>
              <h2 className='text-[30px] md:text-[40px] text-blue-900 font-bold '>{item.title}</h2>
              <p className='text-gray-400 text-[20px] '>{item.desc}</p>
              <Link to='/gallery' state={item.imageInfo} >
                <button className='bg-orange-500 border-none rounded-[10px] w-[200px] cursor-pointer'>See Designs</button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    );
};
  

const WorkSection = () => {

    const ref = useRef()
    const {scrollYProgress} = useScroll({target:ref , offset:["end end" , "start start"]}); 
    const scaleX = useSpring(scrollYProgress,{
        stiffness: 100,
        damping: 30,
    } )

  return (
    <div className='relative' ref={ref} id='MyWork'>
        <div className='sticky top-0 left-0 pt-[10px] text-center text-orange-400 text-[36px]'>
            <h1 className=''>My Work</h1>
            <motion.div style={{scaleX}} className='h-[5px] bg-white'></motion.div>
        </div>
        {items.map(item => (
            <Single item={item} key={item.id}  />
        ))}
    </div>
  )
}

export default WorkSection