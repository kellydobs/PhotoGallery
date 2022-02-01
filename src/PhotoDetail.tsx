import React from 'react'
import { useParams } from 'react-router-dom'
import { Category } from './Types'

export default function PhotoDetail(props: {
  keys: String[]
  values: Category[]
}) {
  let params = useParams<{ id: string; index: string }>()
  const index = props.keys.indexOf(params.id!)
  const category = props.values[index]
  const photoIndex = Number.parseInt(params.index!)
  const photo = category.photos[photoIndex]
  console.log(photo.title)

  return (
    <>
      <h2>{photo.title}</h2>
      <img src={photo.imageURL}></img>
      <a href={photo.sourceURL}>Source</a>
    </>
  )
}
