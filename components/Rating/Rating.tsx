import { useEffect, useState, KeyboardEvent } from 'react'
import cn from 'classnames'
import style from './Rating.module.css'
import StarIcon from './star.svg'
import { RatingProps } from './Rating.props'



export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

	useEffect(() => {
		constructRating(rating)
	}, [rating])

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<span
					key={i}
					className={cn(style.star__item, {
						[style.editable]: isEditable
					})}
					onMouseEnter={() => changeDisplay(i + 1, isEditable, constructRating)}
					onMouseLeave={() => changeDisplay(rating, isEditable, constructRating)}
					onClick={() => onclick(i + 1, isEditable, setRating)}
				>
					<StarIcon
						className={cn(style.star, {
							[style.filled]: i < currentRating
						})}

						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e, setRating)}
					/>
				</span>
			)
		})
		setRatingArray(updatedArray)
	}

	return (
		<div {...props}>
			{ratingArray.map((r, i) => <span key={i}>{r}</span>)}
			{/* {ratingArray} */}
		</div>
	)
}



const changeDisplay = (i: number, isEditable: boolean, construct: any) => {
	if (!isEditable) {
		return
	}
	construct(i)
}

const onclick = (i: number, isEditable: boolean, set: any) => {
	if (!isEditable || !set) {
		return
	}
	set(i)
}

const handleSpace = (i: number, e: KeyboardEvent<SVGElement>, set: any) => {
	if (e.code != 'Space' || !set) {
		return
	}
	set(i)
}