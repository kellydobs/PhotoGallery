import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import data from './data.json'
import { Photo, Category } from './Types'

export default function CategoryList() {
  const keys = Object.keys(data)
  const values = Object.values(data) as Category[]

  return (
    <>
      <h2>{values[0].title}</h2>
      <p>{values[0].description}</p>
    </>
  )
}
