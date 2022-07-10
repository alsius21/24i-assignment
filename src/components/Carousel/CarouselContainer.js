import React from 'react'
import {View} from 'react-native'
import useMovieLists from '../../hooks/useMovieLists'
import Carousel from './Carousel'

const CarouselContainer = () => {
    const [movieLists, isLoading] = useMovieLists()
    return <View>
        {movieLists.map(list => <Carousel title={list.title} items={list.items.map(movie => ({ title: movie.title, assetUrl: movie.posterUrl }))} />)}
    </View>
}

export default CarouselContainer