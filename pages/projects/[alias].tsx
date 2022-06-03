import axios from "axios";
import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from "next";
import { useState } from "react";
import { withLayout } from "../../layout/Layout";
import { Countries } from "../../interfaces/data.interface";
import { ProjectsPageModel } from "../../interfaces/projects.interface";
import { ProjectModel } from "../../interfaces/project.interface";
import { SkillModel } from "../../interfaces/skills.interface";
import { ParsedUrlQuery } from "querystring";

function Project({ skills, projects, project }: ProjectProps): JSX.Element {
	return (
		<>
			{projects && projects.data.length}
		</>
	)
}

export default withLayout(Project)

export const getStaticPaths: GetStaticPaths = async () => {
	const headers = {
		"Content-Type": "application/json",
		"Accept": "application/json",
		'Authorization': 'Bearer a18116fb8f9260884e7631eb85257f7107f97bb6'
	}
	const { data: projects } = await axios.get<ProjectsPageModel>(process.env.NEX_PUBLIC_DOMAIN + '/v2/projects/', {
		headers: headers
	})

	return {
		paths: projects.data.flatMap(m => '/projects/' + m.id),
		fallback: true
	}
}

export const getStaticProps: GetStaticProps<ProjectProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	console.log('params', params);

	if (!params) {
		return {
			notFound: true
		}
	}
	const headers = {
		"Content-Type": "application/json",
		"Accept": "application/json",
		'Authorization': 'Bearer a18116fb8f9260884e7631eb85257f7107f97bb6'
	}

	const { data: skills } = await axios.get<SkillModel[]>(process.env.NEX_PUBLIC_DOMAIN + '/v2/skills/', {
		headers: headers
	})

	const { data: projects } = await axios.get<ProjectsPageModel>(process.env.NEX_PUBLIC_DOMAIN + '/v2/projects/', {
		headers: headers
	})

	const { data: project } = await axios.get<ProjectModel>(process.env.NEX_PUBLIC_DOMAIN + '/v2/projects/' + params.alias, {
		headers: headers
	})


	return {
		props: {
			skills,
			projects,
			project
		}
	}
}

interface ProjectProps extends Record<string, unknown> {
	skills: SkillModel[];
	projects: ProjectsPageModel;
	project: ProjectModel;
}