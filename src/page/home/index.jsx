import React from 'react'
import { useState } from 'react';
import { Button, message, Table  } from 'antd';

const Home = () => {
	const [messageApi, contextHolder] = message.useMessage();
    const [lessonChoise, setLessonChoise] = useState()
	const [wordRandom, setWordRandom] = useState('')
	const [dataLesson, setDataLesson] = useState('')
	const [listLesson, setListLesson] = useState([
		{
			ID: 1,
			Name: 'Lesson 1',
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
			Name: 'Lesson 2',
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
		{
			ID: 3,
			Name: 'Lesson 3',
			ListWord: [
				{
					ID: 1,
					Word: 'home',
					Mean: 'ngôi nhà'
				},
				{
					ID: 2,
					Word: 'address',
					Mean: 'địa chỉ'
				}
			]
		},
	])

	const columns = [
		{
			title: 'Từ vựng',
			dataIndex: 'Word',
			key: 'Word',
		},
		{
			title: 'Nghĩa',
			dataIndex: 'Mean',
			key: 'Mean',
		}
	]

	const changeLesson = (item) => {
		console.log('item', item);
		setLessonChoise(item)
		randomWord()
	}
	
	const randomWord = () => {
		var random = Math.floor(Math.random() * listLesson[lessonChoise-1]?.ListWord?.length);
		setWordRandom( listLesson[lessonChoise-1]?.ListWord[random] )
		console.log(wordRandom?.Word);
	}

	const addLesson = () => {
		if ( dataLesson.length !== 0 ) {
			console.log('add lesson', dataLesson);
			setDataLesson('')
		} else {
			messageApi.error('Không được để trống');
		}
	}

	const inputLesson = (e) => {
		setDataLesson(e.target.value)
	}

	return (
		<div className='over__view'>
			{contextHolder}
			<div className='container'>
				{
					listLesson.map((item) => {
						return (
							<Button onClick={() => { changeLesson(item.ID) }} key={item.ID}>{item.Name}</Button>
						)
					})
				}
				{ wordRandom?.Word }
				<input value={dataLesson}  onChange={inputLesson} />
				<Button onClick={addLesson}>Add lesson</Button>
				{
					listLesson.map((item) => {
						return (
							< div key={item.ID}>
								<div >{item.Name}</div>
								<Table dataSource={item.ListWord} columns={columns} />
							</div>
						)
					})
				}
			</div>
		</div>
	);
}

export default Home