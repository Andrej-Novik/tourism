import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
} from 'typeorm'

@Entity({ name: 'objects' })
	
export class ObjectItem {
	@PrimaryGeneratedColumn('uuid')
	id: string
	@Column()
	img: string
	@Column()
	name: string
	@Column()
	country: string
	@Column()
	text: string
	@Column()
	rate: number
}		
