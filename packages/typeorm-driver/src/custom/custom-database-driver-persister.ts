import { DatabaseDriverPersister } from '@nestixis/nestjs-inbox-outbox/src/driver/database.driver-persister';
import { EntityManager } from 'typeorm';

export class TypeOrmDatabaseDriverPersister implements DatabaseDriverPersister {
    constructor(private readonly manager: EntityManager) {}

    async persist(entity: any) {
        if (entity.id) {
            await this.manager.update(entity.constructor.name, entity.id, entity);
        } else {
            await this.manager.save(entity);
        }
    }

    async remove(entity: any) {
        await this.manager.remove(entity);
    }

    async flush() {
        // no-op, 因为外层事务控制提交
    }
}
