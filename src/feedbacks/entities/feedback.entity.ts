import { Feedback } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";


export class FeedbackEntity implements Feedback {
    @ApiProperty()
    id: number;
    
    @ApiProperty()
    title: string;
    
    @ApiProperty()
    description: string;
    
    @ApiProperty()
    authorId: number;
    
    @ApiProperty()
    createdAt: Date;
    
    @ApiProperty()
    updatedAt: Date;
}
