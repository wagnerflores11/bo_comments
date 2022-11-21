import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, FindManyOptions, Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  create(createCommentDto: CreateCommentDto) {
    const comment = this.commentRepository.create(createCommentDto);
    return this.commentRepository.save(comment);
  }

  findAll(resource: string) {
    let options: FindManyOptions<Comment> = {
      order: { id: 'desc' },
    };

    if (resource) {
      options = {
        ...options,
        where: {
          resource_name: resource,
        },
      };
    }

    return this.commentRepository.find(options);
  }

  findOne(id: number) {
    return this.commentRepository.findOneBy({ id });
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    const updateResult = await this.commentRepository.update(
      id,
      updateCommentDto,
    );

    if (!updateResult.affected) {
      throw new EntityNotFoundError(Comment, id);
    }

    return this.commentRepository.findOneBy({ id });
  }

  async remove(id: number) {
    const deleteResult = await this.commentRepository.delete(id);
    if (!deleteResult.affected) {
      throw new EntityNotFoundError(Comment, id);
    }
  }
}
