import React from 'react'
import { useEffect, useState } from 'react';
import { Button } from 'antd';

const Home = () => {
    const [lessionChoise, setLessionChoise] = useState()
	const [wordRandom, setWordRandom] = useState('')

	const listLession = [
		{
			ID: 1,
			Name: 'Lession 1',
			ListWord: [
				{
					ID: 1,
					Word: 'hello',
					Mean: 'xin chào'
				},
				{
					ID: 2,
					Word: 'school',
					Mean: 'ngôi trường'
				}
			]
		},
		{
			ID: 2,
			Name: 'Lession 2',
			ListWord: [
				{
					ID: 1,
					Word: 'beautiful',
					Mean: 'xinh đẹp'
				},
				{
					ID: 2,
					Word: 'ugly',
					Mean: 'xấu'
				}
			]
		},
	]

	const changeLession = (item) => {
		console.log('item', item);
		setLessionChoise(item)
	}
	
	const randomWord = () => {
		var random = Math.floor(Math.random() * listLession[lessionChoise-1]?.ListWord?.length);
		setWordRandom( listLession[lessionChoise-1]?.ListWord[random] )
	}
	
	useEffect(() => {
		randomWord()
	}, [lessionChoise])
	return (
		<div className='over__view'>
			<div className='container'>
				{
					listLession.map((item) => {
						return (
							<Button onClick={() => { changeLession(item.ID) }} key={item.ID}>{item.Name}</Button>
						)
					})
				}
				{ wordRandom?.Word }
			</div>
		</div>
	);
}

export default Home