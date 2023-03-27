/* eslint-disable no-unused-vars */
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus } from 'phosphor-react';
import type { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

import { useCards } from '~/hooks/useCards';
import { useColumnDrop } from '~/hooks/useDrop';
import type { DataItem, DataStatus } from '~/models/DataList';

import { Card } from '../Card';
import { Modal } from '../Modal';

import {
	BoxBoardContainer,
	BoxHeader,
	Cards,
	CloseButton,
	Form,
	FormControl,
} from './styles';

interface BoxBoardProps {
	column: DataStatus;
	data: DataItem[];
	search: string;
}

export enum BoxColumnToPtBr {
	todo = 'A fazer',
	doing = 'Fazendo',
	done = 'Feito',
}

const NewItemSchema = z.object({
	title: z.string().min(4, {
		message: 'Informe um título',
	}),
	description: z.string().min(4, {
		message: 'Informe uma descrição',
	}),
	// tags: z.enum(['rocketseat', 'challenge', 'self_care']),
});

type NewItemFormInputs = z.infer<typeof NewItemSchema>;

const checkInputError = (input: string): boolean =>
	Boolean((input?.length as number) > 0);

export function BoxBoard({
	column,
	data,
	search,
}: BoxBoardProps): ReactElement {
	const { addItem } = useCards();
	const { dropRef, isOver } = useColumnDrop(column);

	const filteredData = data.filter(
		(item) =>
			item.title.toLocaleLowerCase().includes(search) ||
			item.content.toLocaleLowerCase().includes(search),
	);

	const { register, watch, handleSubmit, reset, formState, setValue } =
		useForm<NewItemFormInputs>({
			resolver: zodResolver(NewItemSchema),
		});

	const { errors } = formState;

	const isValidSubmitForm = watch('description') && watch('title');

	function handleNewItem(data: NewItemFormInputs): void {
		addItem({
			content: data.description,
			title: data.title,
			status: 'todo',
			tags: [
				{
					id: uuidv4(),
					name: 'desafio',
				},
			],
			id: uuidv4(),
		});

		reset();
	}

	return (
		<BoxBoardContainer>
			<BoxHeader>
				<h1>{BoxColumnToPtBr[column]}</h1>

				{column === 'todo' && (
					<Modal
						OpenIcon={Plus}
						title="Adicionar Novo"
					>
						<Form onSubmit={handleSubmit(handleNewItem)}>
							<FormControl
								error={checkInputError(errors?.title?.message as string)}
							>
								<input
									{...register('title')}
									placeholder="Digite o título"
									type="text"
									autoComplete="off"
								/>
							</FormControl>

							<FormControl
								error={checkInputError(errors?.description?.message as string)}
							>
								<textarea
									{...register('description')}
									placeholder="Digite uma descrição"
									autoComplete="off"
								/>
							</FormControl>

							<CloseButton
								type="submit"
								disabled={!isValidSubmitForm}
							>
								Adicionar
							</CloseButton>
						</Form>
					</Modal>
				)}
			</BoxHeader>

			<Cards
				ref={dropRef}
				isOver={isOver}
			>
				{search &&
					filteredData.map((item) => (
						<Card
							key={item.id}
							data={item}
						/>
					))}

				{!search &&
					data.map((item) => (
						<Card
							key={item.id}
							data={item}
						/>
					))}
			</Cards>
		</BoxBoardContainer>
	);
}
