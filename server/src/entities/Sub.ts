import { Expose } from "class-transformer";
import { Column, Entity, Index, ManyToOne, OneToMany,JoinColumn } from "typeorm";
import BaseEntity from "./Entity"
@Entity("subs")
export default class Sub extends BaseEntity {
    @Index()
    @Column({upique: true})
    name: string;

    @Column()
    title: string;

    @Column({type: "text", nullable: true})
    description: string;

    @Column({ nullable: true})
    imageUrn: string;

    @Column({nullable: true})
        bannerUrn: string;

    @Column()
    username: string;

    @ManyToOne(()=>User)
    @JoinColumn({ name: "username", referencedColumnName: "username"})
    user: User;

    @OneToMany(()=> Post, (post)=> post.sub)
    posts: Post[]

    @Expose()
    get imageUrl(): string {
        return this.imageUrn ? `${process.env.APP.URL}/images/${this.imageUrn}` :
        "https://www.gravatar.com/avatar?d=mp&f=y"
    }
    @Expose()
    get bannerUrl(): string {
        return this.bannerUrl ? `${process.env.APP.URL}/images/${this.bannerUrl}` :
        undefined
    }
}
}