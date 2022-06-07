import axios from "axios";
import { GetStaticProps } from "next";
import { useState } from "react";
import { Button, Htag, Ptag, Rating, Tag } from "../components";
import { Countries } from "../interfaces/data.interface";
import { withLayout } from "../layout/Layout";

function Home({ countries }: HomeProps): JSX.Element {
	const [counter, setCounter] = useState<number>(0)
	const [rating, setRating] = useState<number>(4)

	return (
		<>
			<div className="container bg-white p-3">
				<Htag tag='h1' className="h1">{counter}</Htag>
				<Button
					appearance="primary"
					className="primary"
					arrow="right"
					onClick={() => setCounter(x => x + 1)}
				>
					Узнать подробнее
				</Button>
				<Button
					appearance="ghost"
					className="right"
					arrow="down"
					onClick={() => setCounter(x => x - 1)}
				>
					Читать отзывы
				</Button>
				<Ptag size='big'>
					Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.
				</Ptag>

				<Ptag>
					Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.
				</Ptag>

				<Ptag size='small'>
					Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.
				</Ptag>
				<Tag size="s" color="ghost">Photoshop</Tag>
				<Tag size="m" color="grey">10</Tag>
				<Tag size="m" color="green">-10 000 ₽</Tag>
				<Tag size="m" color="red">hh.ru</Tag>
				<Tag size="s" color="primary">Подготовка макетов</Tag>
				<Rating rating={rating} isEditable setRating={setRating} />
			</div>
		</>
	)
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0

	const headers = {
		"Content-Type": "application/json",
		"Accept": "application/json",
		'Authorization': 'Bearer ' + process.env.API_KEY
	}
	const { data: countries } = await axios.get<Countries[]>(process.env.NEX_PUBLIC_DOMAIN + '/v2/countries/', {
		headers: headers
	})

	return {
		props: {
			countries
		}
	}
}

interface HomeProps extends Record<string, unknown> {
	countries: Countries[];
}