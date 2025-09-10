import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { HelloController } from './hello/hello.controller';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TasksModule, ProjectsModule, AuthModule, UsersModule],
  controllers: [HelloController],
})
export class AppModule {}
