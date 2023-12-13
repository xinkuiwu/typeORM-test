import {AppDataSource} from "./data-source"
import {User} from "./entity/User"

AppDataSource.initialize().then(async () => {
  // entity使用
  // console.log("Inserting a new user into the database...")
  // const user = new User()
  // user.firstName = "Timber"
  // user.lastName = "Saw"
  // user.age = 25
  // await AppDataSource.manager.save(user)
  // console.log("Saved a new user with id: " + user.id)
  //
  // console.log("Loading users from the database...")
  // const users = await AppDataSource.manager.find(User)
  // console.log("Loaded users: ", users)
  //
  // console.log("Here you can setup and run express / fastify / any other framework.")

  // 修改和插入
  // await AppDataSource.manager.save(User, [
  //     { id: 2 ,firstName: 'ccc111', lastName: 'ccc', age: 21},
  //     { id: 3 ,firstName: 'ddd222', lastName: 'ddd', age: 22},
  //     { id: 4, firstName: 'eee333', lastName: 'eee', age: 23}
  // ]);

  // 根据id,删除
  // await AppDataSource.manager.delete(User, 1);
  // await AppDataSource.manager.delete(User, [2,3]);


  // remove，根据entity对象删除
  // const user = new User();
  // user.id = 1;
  //
  // await AppDataSource.manager.remove(User, user);

//      find 查询
//     const users = await AppDataSource.manager.find(User);
//     console.log(users);

//     可以通过 findBy 方法根据条件查询
//     const users = await AppDataSource.manager.findBy(User, {
//         age: 23
//     });
//     console.log(users);
//     const [users, count] = await AppDataSource.manager.findAndCountBy(User, {
//         age: 23
//     })
//     console.log(users, count);

//     查询一条，使用 findOne：
//     const user = await AppDataSource.manager.findOne(User, {
//         select: {
//             firstName: true,
//             age: true
//         },
//         where: {
//             id: 4
//         //                 id: In([4, 8])
//         },
//         order: {
//             age: 'ASC'
//         }
//     });
//     console.log(user);

  //findOneOrFail 或者 findOneByOrFail，如果没找到，会抛一个 EntityNotFoundError 的异常：
  // try {
  //   const user = await AppDataSource.manager.findOneOrFail(User, {
  //     where: {
  //       id: 666
  //     }
  //   });
  //   console.log(user);
  // } catch (e) {
  //   console.log(e);
  //   console.log('没找到该用户');
  // }

  // query 方法直接执行 sql
  // const users = await AppDataSource.manager.query('select * from user where age in(?, ?)', [21, 22]);
  // console.log(users);
  //
  // 复杂 sql 语句不会直接写，而是会用 query builder
  // const queryBuilder = await AppDataSource.manager.createQueryBuilder();
  //
  // const user = await queryBuilder.select("user")
  //   .from(User, "user")
  //   .where("user.age = :age", { age: 21 })
  //   .getOne();
  //
  // console.log(user);

//   多条有关联的数据的增删改都离不开事务，怎么开启事务
//   transaction 方法
//   await AppDataSource.manager.transaction(async manager => {
//     await manager.save(User, {
//       id: 4,
//       firstName: 'eee',
//       lastName: 'eee',
//       age: 20
//     });
//   });

  // 调用每个方法的时候都要先传入实体类，这也太麻烦
//   只是对单个 Entity 做 CRUD，那可以先 getRepository 拿到对具体 Entity 操作的工具类，再调用 save、delete、find 等方法
//先调用 getRepository 传入 Entity，拿到专门处理这个 Entity 的增删改查的类，再调用这些方法
//   const userEntity = AppDataSource.manager.getRepository(User)
//   userEntity.xxxfunction

}).catch(error => console.log(error))
