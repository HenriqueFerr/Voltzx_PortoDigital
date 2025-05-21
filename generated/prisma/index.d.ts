
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Lands
 * 
 */
export type Lands = $Result.DefaultSelection<Prisma.$LandsPayload>
/**
 * Model landowners
 * 
 */
export type landowners = $Result.DefaultSelection<Prisma.$landownersPayload>
/**
 * Model companies
 * 
 */
export type companies = $Result.DefaultSelection<Prisma.$companiesPayload>
/**
 * Model investors
 * 
 */
export type investors = $Result.DefaultSelection<Prisma.$investorsPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Invesiment
 * 
 */
export type Invesiment = $Result.DefaultSelection<Prisma.$InvesimentPayload>
/**
 * Model projectProposal
 * 
 */
export type projectProposal = $Result.DefaultSelection<Prisma.$projectProposalPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  INVESTOR: 'INVESTOR',
  OWNER: 'OWNER',
  COMPANY: 'COMPANY'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


export const StatusApproval: {
  pending_approval: 'pending_approval',
  active: 'active',
  completed: 'completed'
};

export type StatusApproval = (typeof StatusApproval)[keyof typeof StatusApproval]


export const OwnerAgree: {
  pending: 'pending',
  accepted: 'accepted',
  rejected: 'rejected'
};

export type OwnerAgree = (typeof OwnerAgree)[keyof typeof OwnerAgree]


export const CompanyAgree: {
  pending: 'pending',
  accepted: 'accepted',
  rejected: 'rejected'
};

export type CompanyAgree = (typeof CompanyAgree)[keyof typeof CompanyAgree]


export const StatusInvesiment: {
  pending: 'pending',
  accepted: 'accepted',
  rejected: 'rejected'
};

export type StatusInvesiment = (typeof StatusInvesiment)[keyof typeof StatusInvesiment]


export const statusProposal: {
  pending: 'pending',
  accepted: 'accepted',
  rejected: 'rejected'
};

export type statusProposal = (typeof statusProposal)[keyof typeof statusProposal]


export const OwnerAgreeProposal: {
  pending: 'pending',
  accepted: 'accepted',
  rejected: 'rejected'
};

export type OwnerAgreeProposal = (typeof OwnerAgreeProposal)[keyof typeof OwnerAgreeProposal]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

export type StatusApproval = $Enums.StatusApproval

export const StatusApproval: typeof $Enums.StatusApproval

export type OwnerAgree = $Enums.OwnerAgree

export const OwnerAgree: typeof $Enums.OwnerAgree

export type CompanyAgree = $Enums.CompanyAgree

export const CompanyAgree: typeof $Enums.CompanyAgree

export type StatusInvesiment = $Enums.StatusInvesiment

export const StatusInvesiment: typeof $Enums.StatusInvesiment

export type statusProposal = $Enums.statusProposal

export const statusProposal: typeof $Enums.statusProposal

export type OwnerAgreeProposal = $Enums.OwnerAgreeProposal

export const OwnerAgreeProposal: typeof $Enums.OwnerAgreeProposal

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lands`: Exposes CRUD operations for the **Lands** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lands
    * const lands = await prisma.lands.findMany()
    * ```
    */
  get lands(): Prisma.LandsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.landowners`: Exposes CRUD operations for the **landowners** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Landowners
    * const landowners = await prisma.landowners.findMany()
    * ```
    */
  get landowners(): Prisma.landownersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companies`: Exposes CRUD operations for the **companies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.companies.findMany()
    * ```
    */
  get companies(): Prisma.companiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.investors`: Exposes CRUD operations for the **investors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Investors
    * const investors = await prisma.investors.findMany()
    * ```
    */
  get investors(): Prisma.investorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invesiment`: Exposes CRUD operations for the **Invesiment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invesiments
    * const invesiments = await prisma.invesiment.findMany()
    * ```
    */
  get invesiment(): Prisma.InvesimentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectProposal`: Exposes CRUD operations for the **projectProposal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectProposals
    * const projectProposals = await prisma.projectProposal.findMany()
    * ```
    */
  get projectProposal(): Prisma.projectProposalDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Lands: 'Lands',
    landowners: 'landowners',
    companies: 'companies',
    investors: 'investors',
    Project: 'Project',
    Invesiment: 'Invesiment',
    projectProposal: 'projectProposal'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "lands" | "landowners" | "companies" | "investors" | "project" | "invesiment" | "projectProposal"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Lands: {
        payload: Prisma.$LandsPayload<ExtArgs>
        fields: Prisma.LandsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LandsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LandsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandsPayload>
          }
          findFirst: {
            args: Prisma.LandsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LandsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandsPayload>
          }
          findMany: {
            args: Prisma.LandsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandsPayload>[]
          }
          create: {
            args: Prisma.LandsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandsPayload>
          }
          createMany: {
            args: Prisma.LandsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LandsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandsPayload>[]
          }
          delete: {
            args: Prisma.LandsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandsPayload>
          }
          update: {
            args: Prisma.LandsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandsPayload>
          }
          deleteMany: {
            args: Prisma.LandsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LandsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LandsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandsPayload>[]
          }
          upsert: {
            args: Prisma.LandsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandsPayload>
          }
          aggregate: {
            args: Prisma.LandsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLands>
          }
          groupBy: {
            args: Prisma.LandsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LandsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LandsCountArgs<ExtArgs>
            result: $Utils.Optional<LandsCountAggregateOutputType> | number
          }
        }
      }
      landowners: {
        payload: Prisma.$landownersPayload<ExtArgs>
        fields: Prisma.landownersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.landownersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landownersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.landownersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landownersPayload>
          }
          findFirst: {
            args: Prisma.landownersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landownersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.landownersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landownersPayload>
          }
          findMany: {
            args: Prisma.landownersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landownersPayload>[]
          }
          create: {
            args: Prisma.landownersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landownersPayload>
          }
          createMany: {
            args: Prisma.landownersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.landownersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landownersPayload>[]
          }
          delete: {
            args: Prisma.landownersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landownersPayload>
          }
          update: {
            args: Prisma.landownersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landownersPayload>
          }
          deleteMany: {
            args: Prisma.landownersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.landownersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.landownersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landownersPayload>[]
          }
          upsert: {
            args: Prisma.landownersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landownersPayload>
          }
          aggregate: {
            args: Prisma.LandownersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLandowners>
          }
          groupBy: {
            args: Prisma.landownersGroupByArgs<ExtArgs>
            result: $Utils.Optional<LandownersGroupByOutputType>[]
          }
          count: {
            args: Prisma.landownersCountArgs<ExtArgs>
            result: $Utils.Optional<LandownersCountAggregateOutputType> | number
          }
        }
      }
      companies: {
        payload: Prisma.$companiesPayload<ExtArgs>
        fields: Prisma.companiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.companiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.companiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          findFirst: {
            args: Prisma.companiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.companiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          findMany: {
            args: Prisma.companiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>[]
          }
          create: {
            args: Prisma.companiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          createMany: {
            args: Prisma.companiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.companiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>[]
          }
          delete: {
            args: Prisma.companiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          update: {
            args: Prisma.companiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          deleteMany: {
            args: Prisma.companiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.companiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.companiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>[]
          }
          upsert: {
            args: Prisma.companiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          aggregate: {
            args: Prisma.CompaniesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanies>
          }
          groupBy: {
            args: Prisma.companiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompaniesGroupByOutputType>[]
          }
          count: {
            args: Prisma.companiesCountArgs<ExtArgs>
            result: $Utils.Optional<CompaniesCountAggregateOutputType> | number
          }
        }
      }
      investors: {
        payload: Prisma.$investorsPayload<ExtArgs>
        fields: Prisma.investorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.investorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.investorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investorsPayload>
          }
          findFirst: {
            args: Prisma.investorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.investorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investorsPayload>
          }
          findMany: {
            args: Prisma.investorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investorsPayload>[]
          }
          create: {
            args: Prisma.investorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investorsPayload>
          }
          createMany: {
            args: Prisma.investorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.investorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investorsPayload>[]
          }
          delete: {
            args: Prisma.investorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investorsPayload>
          }
          update: {
            args: Prisma.investorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investorsPayload>
          }
          deleteMany: {
            args: Prisma.investorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.investorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.investorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investorsPayload>[]
          }
          upsert: {
            args: Prisma.investorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investorsPayload>
          }
          aggregate: {
            args: Prisma.InvestorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestors>
          }
          groupBy: {
            args: Prisma.investorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvestorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.investorsCountArgs<ExtArgs>
            result: $Utils.Optional<InvestorsCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Invesiment: {
        payload: Prisma.$InvesimentPayload<ExtArgs>
        fields: Prisma.InvesimentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvesimentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvesimentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvesimentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvesimentPayload>
          }
          findFirst: {
            args: Prisma.InvesimentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvesimentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvesimentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvesimentPayload>
          }
          findMany: {
            args: Prisma.InvesimentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvesimentPayload>[]
          }
          create: {
            args: Prisma.InvesimentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvesimentPayload>
          }
          createMany: {
            args: Prisma.InvesimentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvesimentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvesimentPayload>[]
          }
          delete: {
            args: Prisma.InvesimentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvesimentPayload>
          }
          update: {
            args: Prisma.InvesimentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvesimentPayload>
          }
          deleteMany: {
            args: Prisma.InvesimentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvesimentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvesimentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvesimentPayload>[]
          }
          upsert: {
            args: Prisma.InvesimentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvesimentPayload>
          }
          aggregate: {
            args: Prisma.InvesimentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvesiment>
          }
          groupBy: {
            args: Prisma.InvesimentGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvesimentGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvesimentCountArgs<ExtArgs>
            result: $Utils.Optional<InvesimentCountAggregateOutputType> | number
          }
        }
      }
      projectProposal: {
        payload: Prisma.$projectProposalPayload<ExtArgs>
        fields: Prisma.projectProposalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectProposalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectProposalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectProposalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectProposalPayload>
          }
          findFirst: {
            args: Prisma.projectProposalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectProposalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectProposalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectProposalPayload>
          }
          findMany: {
            args: Prisma.projectProposalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectProposalPayload>[]
          }
          create: {
            args: Prisma.projectProposalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectProposalPayload>
          }
          createMany: {
            args: Prisma.projectProposalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.projectProposalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectProposalPayload>[]
          }
          delete: {
            args: Prisma.projectProposalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectProposalPayload>
          }
          update: {
            args: Prisma.projectProposalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectProposalPayload>
          }
          deleteMany: {
            args: Prisma.projectProposalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectProposalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.projectProposalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectProposalPayload>[]
          }
          upsert: {
            args: Prisma.projectProposalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectProposalPayload>
          }
          aggregate: {
            args: Prisma.ProjectProposalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectProposal>
          }
          groupBy: {
            args: Prisma.projectProposalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectProposalGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectProposalCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectProposalCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    lands?: LandsOmit
    landowners?: landownersOmit
    companies?: companiesOmit
    investors?: investorsOmit
    project?: ProjectOmit
    invesiment?: InvesimentOmit
    projectProposal?: projectProposalOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LandsCountOutputType
   */

  export type LandsCountOutputType = {
    projects: number
    projectsProposal: number
  }

  export type LandsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | LandsCountOutputTypeCountProjectsArgs
    projectsProposal?: boolean | LandsCountOutputTypeCountProjectsProposalArgs
  }

  // Custom InputTypes
  /**
   * LandsCountOutputType without action
   */
  export type LandsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandsCountOutputType
     */
    select?: LandsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LandsCountOutputType without action
   */
  export type LandsCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * LandsCountOutputType without action
   */
  export type LandsCountOutputTypeCountProjectsProposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectProposalWhereInput
  }


  /**
   * Count Type LandownersCountOutputType
   */

  export type LandownersCountOutputType = {
    lands: number
  }

  export type LandownersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lands?: boolean | LandownersCountOutputTypeCountLandsArgs
  }

  // Custom InputTypes
  /**
   * LandownersCountOutputType without action
   */
  export type LandownersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandownersCountOutputType
     */
    select?: LandownersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LandownersCountOutputType without action
   */
  export type LandownersCountOutputTypeCountLandsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LandsWhereInput
  }


  /**
   * Count Type CompaniesCountOutputType
   */

  export type CompaniesCountOutputType = {
    projects: number
  }

  export type CompaniesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | CompaniesCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniesCountOutputType
     */
    select?: CompaniesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type InvestorsCountOutputType
   */

  export type InvestorsCountOutputType = {
    invesiments: number
  }

  export type InvestorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invesiments?: boolean | InvestorsCountOutputTypeCountInvesimentsArgs
  }

  // Custom InputTypes
  /**
   * InvestorsCountOutputType without action
   */
  export type InvestorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestorsCountOutputType
     */
    select?: InvestorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvestorsCountOutputType without action
   */
  export type InvestorsCountOutputTypeCountInvesimentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvesimentWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    investments: number
    projectsProposal: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investments?: boolean | ProjectCountOutputTypeCountInvestmentsArgs
    projectsProposal?: boolean | ProjectCountOutputTypeCountProjectsProposalArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountInvestmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvesimentWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountProjectsProposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectProposalWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    user_type: $Enums.UserType | null
    phone: string | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    user_type: $Enums.UserType | null
    phone: string | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    user_type: number
    phone: number
    created_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    user_type?: true
    phone?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    user_type?: true
    phone?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    user_type?: true
    phone?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    user_type: $Enums.UserType
    phone: string | null
    created_at: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    user_type?: boolean
    phone?: boolean
    created_at?: boolean
    landOwner?: boolean | Users$landOwnerArgs<ExtArgs>
    company?: boolean | Users$companyArgs<ExtArgs>
    investor?: boolean | Users$investorArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    user_type?: boolean
    phone?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    user_type?: boolean
    phone?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    user_type?: boolean
    phone?: boolean
    created_at?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "user_type" | "phone" | "created_at", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    landOwner?: boolean | Users$landOwnerArgs<ExtArgs>
    company?: boolean | Users$companyArgs<ExtArgs>
    investor?: boolean | Users$investorArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      landOwner: Prisma.$landownersPayload<ExtArgs> | null
      company: Prisma.$companiesPayload<ExtArgs> | null
      investor: Prisma.$investorsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      user_type: $Enums.UserType
      phone: string | null
      created_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    landOwner<T extends Users$landOwnerArgs<ExtArgs> = {}>(args?: Subset<T, Users$landOwnerArgs<ExtArgs>>): Prisma__landownersClient<$Result.GetResult<Prisma.$landownersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    company<T extends Users$companyArgs<ExtArgs> = {}>(args?: Subset<T, Users$companyArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    investor<T extends Users$investorArgs<ExtArgs> = {}>(args?: Subset<T, Users$investorArgs<ExtArgs>>): Prisma__investorsClient<$Result.GetResult<Prisma.$investorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly user_type: FieldRef<"Users", 'UserType'>
    readonly phone: FieldRef<"Users", 'String'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.landOwner
   */
  export type Users$landOwnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landowners
     */
    select?: landownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the landowners
     */
    omit?: landownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landownersInclude<ExtArgs> | null
    where?: landownersWhereInput
  }

  /**
   * Users.company
   */
  export type Users$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    where?: companiesWhereInput
  }

  /**
   * Users.investor
   */
  export type Users$investorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investors
     */
    select?: investorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investors
     */
    omit?: investorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investorsInclude<ExtArgs> | null
    where?: investorsWhereInput
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Lands
   */

  export type AggregateLands = {
    _count: LandsCountAggregateOutputType | null
    _avg: LandsAvgAggregateOutputType | null
    _sum: LandsSumAggregateOutputType | null
    _min: LandsMinAggregateOutputType | null
    _max: LandsMaxAggregateOutputType | null
  }

  export type LandsAvgAggregateOutputType = {
    area: number | null
  }

  export type LandsSumAggregateOutputType = {
    area: number | null
  }

  export type LandsMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    area: number | null
    avaliability: boolean | null
    street: string | null
    number: string | null
    complement: string | null
    district: string | null
    city: string | null
    state: string | null
    postalCode: string | null
    country: string | null
  }

  export type LandsMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    area: number | null
    avaliability: boolean | null
    street: string | null
    number: string | null
    complement: string | null
    district: string | null
    city: string | null
    state: string | null
    postalCode: string | null
    country: string | null
  }

  export type LandsCountAggregateOutputType = {
    id: number
    ownerId: number
    area: number
    avaliability: number
    street: number
    number: number
    complement: number
    district: number
    city: number
    state: number
    postalCode: number
    country: number
    _all: number
  }


  export type LandsAvgAggregateInputType = {
    area?: true
  }

  export type LandsSumAggregateInputType = {
    area?: true
  }

  export type LandsMinAggregateInputType = {
    id?: true
    ownerId?: true
    area?: true
    avaliability?: true
    street?: true
    number?: true
    complement?: true
    district?: true
    city?: true
    state?: true
    postalCode?: true
    country?: true
  }

  export type LandsMaxAggregateInputType = {
    id?: true
    ownerId?: true
    area?: true
    avaliability?: true
    street?: true
    number?: true
    complement?: true
    district?: true
    city?: true
    state?: true
    postalCode?: true
    country?: true
  }

  export type LandsCountAggregateInputType = {
    id?: true
    ownerId?: true
    area?: true
    avaliability?: true
    street?: true
    number?: true
    complement?: true
    district?: true
    city?: true
    state?: true
    postalCode?: true
    country?: true
    _all?: true
  }

  export type LandsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lands to aggregate.
     */
    where?: LandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lands to fetch.
     */
    orderBy?: LandsOrderByWithRelationInput | LandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lands
    **/
    _count?: true | LandsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LandsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LandsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LandsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LandsMaxAggregateInputType
  }

  export type GetLandsAggregateType<T extends LandsAggregateArgs> = {
        [P in keyof T & keyof AggregateLands]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLands[P]>
      : GetScalarType<T[P], AggregateLands[P]>
  }




  export type LandsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LandsWhereInput
    orderBy?: LandsOrderByWithAggregationInput | LandsOrderByWithAggregationInput[]
    by: LandsScalarFieldEnum[] | LandsScalarFieldEnum
    having?: LandsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LandsCountAggregateInputType | true
    _avg?: LandsAvgAggregateInputType
    _sum?: LandsSumAggregateInputType
    _min?: LandsMinAggregateInputType
    _max?: LandsMaxAggregateInputType
  }

  export type LandsGroupByOutputType = {
    id: string
    ownerId: string
    area: number
    avaliability: boolean
    street: string
    number: string
    complement: string
    district: string
    city: string
    state: string
    postalCode: string
    country: string
    _count: LandsCountAggregateOutputType | null
    _avg: LandsAvgAggregateOutputType | null
    _sum: LandsSumAggregateOutputType | null
    _min: LandsMinAggregateOutputType | null
    _max: LandsMaxAggregateOutputType | null
  }

  type GetLandsGroupByPayload<T extends LandsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LandsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LandsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LandsGroupByOutputType[P]>
            : GetScalarType<T[P], LandsGroupByOutputType[P]>
        }
      >
    >


  export type LandsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    area?: boolean
    avaliability?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    district?: boolean
    city?: boolean
    state?: boolean
    postalCode?: boolean
    country?: boolean
    owner?: boolean | landownersDefaultArgs<ExtArgs>
    projects?: boolean | Lands$projectsArgs<ExtArgs>
    projectsProposal?: boolean | Lands$projectsProposalArgs<ExtArgs>
    _count?: boolean | LandsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lands"]>

  export type LandsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    area?: boolean
    avaliability?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    district?: boolean
    city?: boolean
    state?: boolean
    postalCode?: boolean
    country?: boolean
    owner?: boolean | landownersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lands"]>

  export type LandsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    area?: boolean
    avaliability?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    district?: boolean
    city?: boolean
    state?: boolean
    postalCode?: boolean
    country?: boolean
    owner?: boolean | landownersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lands"]>

  export type LandsSelectScalar = {
    id?: boolean
    ownerId?: boolean
    area?: boolean
    avaliability?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    district?: boolean
    city?: boolean
    state?: boolean
    postalCode?: boolean
    country?: boolean
  }

  export type LandsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "area" | "avaliability" | "street" | "number" | "complement" | "district" | "city" | "state" | "postalCode" | "country", ExtArgs["result"]["lands"]>
  export type LandsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | landownersDefaultArgs<ExtArgs>
    projects?: boolean | Lands$projectsArgs<ExtArgs>
    projectsProposal?: boolean | Lands$projectsProposalArgs<ExtArgs>
    _count?: boolean | LandsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LandsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | landownersDefaultArgs<ExtArgs>
  }
  export type LandsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | landownersDefaultArgs<ExtArgs>
  }

  export type $LandsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lands"
    objects: {
      owner: Prisma.$landownersPayload<ExtArgs>
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      projectsProposal: Prisma.$projectProposalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      area: number
      avaliability: boolean
      street: string
      number: string
      complement: string
      district: string
      city: string
      state: string
      postalCode: string
      country: string
    }, ExtArgs["result"]["lands"]>
    composites: {}
  }

  type LandsGetPayload<S extends boolean | null | undefined | LandsDefaultArgs> = $Result.GetResult<Prisma.$LandsPayload, S>

  type LandsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LandsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LandsCountAggregateInputType | true
    }

  export interface LandsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lands'], meta: { name: 'Lands' } }
    /**
     * Find zero or one Lands that matches the filter.
     * @param {LandsFindUniqueArgs} args - Arguments to find a Lands
     * @example
     * // Get one Lands
     * const lands = await prisma.lands.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LandsFindUniqueArgs>(args: SelectSubset<T, LandsFindUniqueArgs<ExtArgs>>): Prisma__LandsClient<$Result.GetResult<Prisma.$LandsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lands that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LandsFindUniqueOrThrowArgs} args - Arguments to find a Lands
     * @example
     * // Get one Lands
     * const lands = await prisma.lands.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LandsFindUniqueOrThrowArgs>(args: SelectSubset<T, LandsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LandsClient<$Result.GetResult<Prisma.$LandsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandsFindFirstArgs} args - Arguments to find a Lands
     * @example
     * // Get one Lands
     * const lands = await prisma.lands.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LandsFindFirstArgs>(args?: SelectSubset<T, LandsFindFirstArgs<ExtArgs>>): Prisma__LandsClient<$Result.GetResult<Prisma.$LandsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lands that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandsFindFirstOrThrowArgs} args - Arguments to find a Lands
     * @example
     * // Get one Lands
     * const lands = await prisma.lands.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LandsFindFirstOrThrowArgs>(args?: SelectSubset<T, LandsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LandsClient<$Result.GetResult<Prisma.$LandsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lands
     * const lands = await prisma.lands.findMany()
     * 
     * // Get first 10 Lands
     * const lands = await prisma.lands.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const landsWithIdOnly = await prisma.lands.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LandsFindManyArgs>(args?: SelectSubset<T, LandsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lands.
     * @param {LandsCreateArgs} args - Arguments to create a Lands.
     * @example
     * // Create one Lands
     * const Lands = await prisma.lands.create({
     *   data: {
     *     // ... data to create a Lands
     *   }
     * })
     * 
     */
    create<T extends LandsCreateArgs>(args: SelectSubset<T, LandsCreateArgs<ExtArgs>>): Prisma__LandsClient<$Result.GetResult<Prisma.$LandsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lands.
     * @param {LandsCreateManyArgs} args - Arguments to create many Lands.
     * @example
     * // Create many Lands
     * const lands = await prisma.lands.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LandsCreateManyArgs>(args?: SelectSubset<T, LandsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lands and returns the data saved in the database.
     * @param {LandsCreateManyAndReturnArgs} args - Arguments to create many Lands.
     * @example
     * // Create many Lands
     * const lands = await prisma.lands.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lands and only return the `id`
     * const landsWithIdOnly = await prisma.lands.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LandsCreateManyAndReturnArgs>(args?: SelectSubset<T, LandsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lands.
     * @param {LandsDeleteArgs} args - Arguments to delete one Lands.
     * @example
     * // Delete one Lands
     * const Lands = await prisma.lands.delete({
     *   where: {
     *     // ... filter to delete one Lands
     *   }
     * })
     * 
     */
    delete<T extends LandsDeleteArgs>(args: SelectSubset<T, LandsDeleteArgs<ExtArgs>>): Prisma__LandsClient<$Result.GetResult<Prisma.$LandsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lands.
     * @param {LandsUpdateArgs} args - Arguments to update one Lands.
     * @example
     * // Update one Lands
     * const lands = await prisma.lands.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LandsUpdateArgs>(args: SelectSubset<T, LandsUpdateArgs<ExtArgs>>): Prisma__LandsClient<$Result.GetResult<Prisma.$LandsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lands.
     * @param {LandsDeleteManyArgs} args - Arguments to filter Lands to delete.
     * @example
     * // Delete a few Lands
     * const { count } = await prisma.lands.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LandsDeleteManyArgs>(args?: SelectSubset<T, LandsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lands
     * const lands = await prisma.lands.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LandsUpdateManyArgs>(args: SelectSubset<T, LandsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lands and returns the data updated in the database.
     * @param {LandsUpdateManyAndReturnArgs} args - Arguments to update many Lands.
     * @example
     * // Update many Lands
     * const lands = await prisma.lands.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lands and only return the `id`
     * const landsWithIdOnly = await prisma.lands.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LandsUpdateManyAndReturnArgs>(args: SelectSubset<T, LandsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lands.
     * @param {LandsUpsertArgs} args - Arguments to update or create a Lands.
     * @example
     * // Update or create a Lands
     * const lands = await prisma.lands.upsert({
     *   create: {
     *     // ... data to create a Lands
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lands we want to update
     *   }
     * })
     */
    upsert<T extends LandsUpsertArgs>(args: SelectSubset<T, LandsUpsertArgs<ExtArgs>>): Prisma__LandsClient<$Result.GetResult<Prisma.$LandsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandsCountArgs} args - Arguments to filter Lands to count.
     * @example
     * // Count the number of Lands
     * const count = await prisma.lands.count({
     *   where: {
     *     // ... the filter for the Lands we want to count
     *   }
     * })
    **/
    count<T extends LandsCountArgs>(
      args?: Subset<T, LandsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LandsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LandsAggregateArgs>(args: Subset<T, LandsAggregateArgs>): Prisma.PrismaPromise<GetLandsAggregateType<T>>

    /**
     * Group by Lands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LandsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LandsGroupByArgs['orderBy'] }
        : { orderBy?: LandsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LandsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLandsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lands model
   */
  readonly fields: LandsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lands.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LandsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends landownersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, landownersDefaultArgs<ExtArgs>>): Prisma__landownersClient<$Result.GetResult<Prisma.$landownersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projects<T extends Lands$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Lands$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectsProposal<T extends Lands$projectsProposalArgs<ExtArgs> = {}>(args?: Subset<T, Lands$projectsProposalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lands model
   */
  interface LandsFieldRefs {
    readonly id: FieldRef<"Lands", 'String'>
    readonly ownerId: FieldRef<"Lands", 'String'>
    readonly area: FieldRef<"Lands", 'Float'>
    readonly avaliability: FieldRef<"Lands", 'Boolean'>
    readonly street: FieldRef<"Lands", 'String'>
    readonly number: FieldRef<"Lands", 'String'>
    readonly complement: FieldRef<"Lands", 'String'>
    readonly district: FieldRef<"Lands", 'String'>
    readonly city: FieldRef<"Lands", 'String'>
    readonly state: FieldRef<"Lands", 'String'>
    readonly postalCode: FieldRef<"Lands", 'String'>
    readonly country: FieldRef<"Lands", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Lands findUnique
   */
  export type LandsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lands
     */
    select?: LandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lands
     */
    omit?: LandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandsInclude<ExtArgs> | null
    /**
     * Filter, which Lands to fetch.
     */
    where: LandsWhereUniqueInput
  }

  /**
   * Lands findUniqueOrThrow
   */
  export type LandsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lands
     */
    select?: LandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lands
     */
    omit?: LandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandsInclude<ExtArgs> | null
    /**
     * Filter, which Lands to fetch.
     */
    where: LandsWhereUniqueInput
  }

  /**
   * Lands findFirst
   */
  export type LandsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lands
     */
    select?: LandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lands
     */
    omit?: LandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandsInclude<ExtArgs> | null
    /**
     * Filter, which Lands to fetch.
     */
    where?: LandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lands to fetch.
     */
    orderBy?: LandsOrderByWithRelationInput | LandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lands.
     */
    cursor?: LandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lands.
     */
    distinct?: LandsScalarFieldEnum | LandsScalarFieldEnum[]
  }

  /**
   * Lands findFirstOrThrow
   */
  export type LandsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lands
     */
    select?: LandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lands
     */
    omit?: LandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandsInclude<ExtArgs> | null
    /**
     * Filter, which Lands to fetch.
     */
    where?: LandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lands to fetch.
     */
    orderBy?: LandsOrderByWithRelationInput | LandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lands.
     */
    cursor?: LandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lands.
     */
    distinct?: LandsScalarFieldEnum | LandsScalarFieldEnum[]
  }

  /**
   * Lands findMany
   */
  export type LandsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lands
     */
    select?: LandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lands
     */
    omit?: LandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandsInclude<ExtArgs> | null
    /**
     * Filter, which Lands to fetch.
     */
    where?: LandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lands to fetch.
     */
    orderBy?: LandsOrderByWithRelationInput | LandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lands.
     */
    cursor?: LandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lands.
     */
    skip?: number
    distinct?: LandsScalarFieldEnum | LandsScalarFieldEnum[]
  }

  /**
   * Lands create
   */
  export type LandsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lands
     */
    select?: LandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lands
     */
    omit?: LandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandsInclude<ExtArgs> | null
    /**
     * The data needed to create a Lands.
     */
    data: XOR<LandsCreateInput, LandsUncheckedCreateInput>
  }

  /**
   * Lands createMany
   */
  export type LandsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lands.
     */
    data: LandsCreateManyInput | LandsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lands createManyAndReturn
   */
  export type LandsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lands
     */
    select?: LandsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lands
     */
    omit?: LandsOmit<ExtArgs> | null
    /**
     * The data used to create many Lands.
     */
    data: LandsCreateManyInput | LandsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lands update
   */
  export type LandsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lands
     */
    select?: LandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lands
     */
    omit?: LandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandsInclude<ExtArgs> | null
    /**
     * The data needed to update a Lands.
     */
    data: XOR<LandsUpdateInput, LandsUncheckedUpdateInput>
    /**
     * Choose, which Lands to update.
     */
    where: LandsWhereUniqueInput
  }

  /**
   * Lands updateMany
   */
  export type LandsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lands.
     */
    data: XOR<LandsUpdateManyMutationInput, LandsUncheckedUpdateManyInput>
    /**
     * Filter which Lands to update
     */
    where?: LandsWhereInput
    /**
     * Limit how many Lands to update.
     */
    limit?: number
  }

  /**
   * Lands updateManyAndReturn
   */
  export type LandsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lands
     */
    select?: LandsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lands
     */
    omit?: LandsOmit<ExtArgs> | null
    /**
     * The data used to update Lands.
     */
    data: XOR<LandsUpdateManyMutationInput, LandsUncheckedUpdateManyInput>
    /**
     * Filter which Lands to update
     */
    where?: LandsWhereInput
    /**
     * Limit how many Lands to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lands upsert
   */
  export type LandsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lands
     */
    select?: LandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lands
     */
    omit?: LandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandsInclude<ExtArgs> | null
    /**
     * The filter to search for the Lands to update in case it exists.
     */
    where: LandsWhereUniqueInput
    /**
     * In case the Lands found by the `where` argument doesn't exist, create a new Lands with this data.
     */
    create: XOR<LandsCreateInput, LandsUncheckedCreateInput>
    /**
     * In case the Lands was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LandsUpdateInput, LandsUncheckedUpdateInput>
  }

  /**
   * Lands delete
   */
  export type LandsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lands
     */
    select?: LandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lands
     */
    omit?: LandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandsInclude<ExtArgs> | null
    /**
     * Filter which Lands to delete.
     */
    where: LandsWhereUniqueInput
  }

  /**
   * Lands deleteMany
   */
  export type LandsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lands to delete
     */
    where?: LandsWhereInput
    /**
     * Limit how many Lands to delete.
     */
    limit?: number
  }

  /**
   * Lands.projects
   */
  export type Lands$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Lands.projectsProposal
   */
  export type Lands$projectsProposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectProposal
     */
    select?: projectProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectProposal
     */
    omit?: projectProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectProposalInclude<ExtArgs> | null
    where?: projectProposalWhereInput
    orderBy?: projectProposalOrderByWithRelationInput | projectProposalOrderByWithRelationInput[]
    cursor?: projectProposalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectProposalScalarFieldEnum | ProjectProposalScalarFieldEnum[]
  }

  /**
   * Lands without action
   */
  export type LandsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lands
     */
    select?: LandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lands
     */
    omit?: LandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandsInclude<ExtArgs> | null
  }


  /**
   * Model landowners
   */

  export type AggregateLandowners = {
    _count: LandownersCountAggregateOutputType | null
    _min: LandownersMinAggregateOutputType | null
    _max: LandownersMaxAggregateOutputType | null
  }

  export type LandownersMinAggregateOutputType = {
    id: string | null
    userId: string | null
    document_id: string | null
  }

  export type LandownersMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    document_id: string | null
  }

  export type LandownersCountAggregateOutputType = {
    id: number
    userId: number
    document_id: number
    _all: number
  }


  export type LandownersMinAggregateInputType = {
    id?: true
    userId?: true
    document_id?: true
  }

  export type LandownersMaxAggregateInputType = {
    id?: true
    userId?: true
    document_id?: true
  }

  export type LandownersCountAggregateInputType = {
    id?: true
    userId?: true
    document_id?: true
    _all?: true
  }

  export type LandownersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which landowners to aggregate.
     */
    where?: landownersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of landowners to fetch.
     */
    orderBy?: landownersOrderByWithRelationInput | landownersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: landownersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` landowners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` landowners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned landowners
    **/
    _count?: true | LandownersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LandownersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LandownersMaxAggregateInputType
  }

  export type GetLandownersAggregateType<T extends LandownersAggregateArgs> = {
        [P in keyof T & keyof AggregateLandowners]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLandowners[P]>
      : GetScalarType<T[P], AggregateLandowners[P]>
  }




  export type landownersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: landownersWhereInput
    orderBy?: landownersOrderByWithAggregationInput | landownersOrderByWithAggregationInput[]
    by: LandownersScalarFieldEnum[] | LandownersScalarFieldEnum
    having?: landownersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LandownersCountAggregateInputType | true
    _min?: LandownersMinAggregateInputType
    _max?: LandownersMaxAggregateInputType
  }

  export type LandownersGroupByOutputType = {
    id: string
    userId: string
    document_id: string
    _count: LandownersCountAggregateOutputType | null
    _min: LandownersMinAggregateOutputType | null
    _max: LandownersMaxAggregateOutputType | null
  }

  type GetLandownersGroupByPayload<T extends landownersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LandownersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LandownersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LandownersGroupByOutputType[P]>
            : GetScalarType<T[P], LandownersGroupByOutputType[P]>
        }
      >
    >


  export type landownersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    document_id?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    lands?: boolean | landowners$landsArgs<ExtArgs>
    _count?: boolean | LandownersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["landowners"]>

  export type landownersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    document_id?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["landowners"]>

  export type landownersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    document_id?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["landowners"]>

  export type landownersSelectScalar = {
    id?: boolean
    userId?: boolean
    document_id?: boolean
  }

  export type landownersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "document_id", ExtArgs["result"]["landowners"]>
  export type landownersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    lands?: boolean | landowners$landsArgs<ExtArgs>
    _count?: boolean | LandownersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type landownersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type landownersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $landownersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "landowners"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      lands: Prisma.$LandsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      document_id: string
    }, ExtArgs["result"]["landowners"]>
    composites: {}
  }

  type landownersGetPayload<S extends boolean | null | undefined | landownersDefaultArgs> = $Result.GetResult<Prisma.$landownersPayload, S>

  type landownersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<landownersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LandownersCountAggregateInputType | true
    }

  export interface landownersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['landowners'], meta: { name: 'landowners' } }
    /**
     * Find zero or one Landowners that matches the filter.
     * @param {landownersFindUniqueArgs} args - Arguments to find a Landowners
     * @example
     * // Get one Landowners
     * const landowners = await prisma.landowners.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends landownersFindUniqueArgs>(args: SelectSubset<T, landownersFindUniqueArgs<ExtArgs>>): Prisma__landownersClient<$Result.GetResult<Prisma.$landownersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Landowners that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {landownersFindUniqueOrThrowArgs} args - Arguments to find a Landowners
     * @example
     * // Get one Landowners
     * const landowners = await prisma.landowners.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends landownersFindUniqueOrThrowArgs>(args: SelectSubset<T, landownersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__landownersClient<$Result.GetResult<Prisma.$landownersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Landowners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {landownersFindFirstArgs} args - Arguments to find a Landowners
     * @example
     * // Get one Landowners
     * const landowners = await prisma.landowners.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends landownersFindFirstArgs>(args?: SelectSubset<T, landownersFindFirstArgs<ExtArgs>>): Prisma__landownersClient<$Result.GetResult<Prisma.$landownersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Landowners that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {landownersFindFirstOrThrowArgs} args - Arguments to find a Landowners
     * @example
     * // Get one Landowners
     * const landowners = await prisma.landowners.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends landownersFindFirstOrThrowArgs>(args?: SelectSubset<T, landownersFindFirstOrThrowArgs<ExtArgs>>): Prisma__landownersClient<$Result.GetResult<Prisma.$landownersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Landowners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {landownersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Landowners
     * const landowners = await prisma.landowners.findMany()
     * 
     * // Get first 10 Landowners
     * const landowners = await prisma.landowners.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const landownersWithIdOnly = await prisma.landowners.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends landownersFindManyArgs>(args?: SelectSubset<T, landownersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$landownersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Landowners.
     * @param {landownersCreateArgs} args - Arguments to create a Landowners.
     * @example
     * // Create one Landowners
     * const Landowners = await prisma.landowners.create({
     *   data: {
     *     // ... data to create a Landowners
     *   }
     * })
     * 
     */
    create<T extends landownersCreateArgs>(args: SelectSubset<T, landownersCreateArgs<ExtArgs>>): Prisma__landownersClient<$Result.GetResult<Prisma.$landownersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Landowners.
     * @param {landownersCreateManyArgs} args - Arguments to create many Landowners.
     * @example
     * // Create many Landowners
     * const landowners = await prisma.landowners.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends landownersCreateManyArgs>(args?: SelectSubset<T, landownersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Landowners and returns the data saved in the database.
     * @param {landownersCreateManyAndReturnArgs} args - Arguments to create many Landowners.
     * @example
     * // Create many Landowners
     * const landowners = await prisma.landowners.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Landowners and only return the `id`
     * const landownersWithIdOnly = await prisma.landowners.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends landownersCreateManyAndReturnArgs>(args?: SelectSubset<T, landownersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$landownersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Landowners.
     * @param {landownersDeleteArgs} args - Arguments to delete one Landowners.
     * @example
     * // Delete one Landowners
     * const Landowners = await prisma.landowners.delete({
     *   where: {
     *     // ... filter to delete one Landowners
     *   }
     * })
     * 
     */
    delete<T extends landownersDeleteArgs>(args: SelectSubset<T, landownersDeleteArgs<ExtArgs>>): Prisma__landownersClient<$Result.GetResult<Prisma.$landownersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Landowners.
     * @param {landownersUpdateArgs} args - Arguments to update one Landowners.
     * @example
     * // Update one Landowners
     * const landowners = await prisma.landowners.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends landownersUpdateArgs>(args: SelectSubset<T, landownersUpdateArgs<ExtArgs>>): Prisma__landownersClient<$Result.GetResult<Prisma.$landownersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Landowners.
     * @param {landownersDeleteManyArgs} args - Arguments to filter Landowners to delete.
     * @example
     * // Delete a few Landowners
     * const { count } = await prisma.landowners.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends landownersDeleteManyArgs>(args?: SelectSubset<T, landownersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Landowners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {landownersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Landowners
     * const landowners = await prisma.landowners.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends landownersUpdateManyArgs>(args: SelectSubset<T, landownersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Landowners and returns the data updated in the database.
     * @param {landownersUpdateManyAndReturnArgs} args - Arguments to update many Landowners.
     * @example
     * // Update many Landowners
     * const landowners = await prisma.landowners.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Landowners and only return the `id`
     * const landownersWithIdOnly = await prisma.landowners.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends landownersUpdateManyAndReturnArgs>(args: SelectSubset<T, landownersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$landownersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Landowners.
     * @param {landownersUpsertArgs} args - Arguments to update or create a Landowners.
     * @example
     * // Update or create a Landowners
     * const landowners = await prisma.landowners.upsert({
     *   create: {
     *     // ... data to create a Landowners
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Landowners we want to update
     *   }
     * })
     */
    upsert<T extends landownersUpsertArgs>(args: SelectSubset<T, landownersUpsertArgs<ExtArgs>>): Prisma__landownersClient<$Result.GetResult<Prisma.$landownersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Landowners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {landownersCountArgs} args - Arguments to filter Landowners to count.
     * @example
     * // Count the number of Landowners
     * const count = await prisma.landowners.count({
     *   where: {
     *     // ... the filter for the Landowners we want to count
     *   }
     * })
    **/
    count<T extends landownersCountArgs>(
      args?: Subset<T, landownersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LandownersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Landowners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandownersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LandownersAggregateArgs>(args: Subset<T, LandownersAggregateArgs>): Prisma.PrismaPromise<GetLandownersAggregateType<T>>

    /**
     * Group by Landowners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {landownersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends landownersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: landownersGroupByArgs['orderBy'] }
        : { orderBy?: landownersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, landownersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLandownersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the landowners model
   */
  readonly fields: landownersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for landowners.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__landownersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lands<T extends landowners$landsArgs<ExtArgs> = {}>(args?: Subset<T, landowners$landsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the landowners model
   */
  interface landownersFieldRefs {
    readonly id: FieldRef<"landowners", 'String'>
    readonly userId: FieldRef<"landowners", 'String'>
    readonly document_id: FieldRef<"landowners", 'String'>
  }
    

  // Custom InputTypes
  /**
   * landowners findUnique
   */
  export type landownersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landowners
     */
    select?: landownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the landowners
     */
    omit?: landownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landownersInclude<ExtArgs> | null
    /**
     * Filter, which landowners to fetch.
     */
    where: landownersWhereUniqueInput
  }

  /**
   * landowners findUniqueOrThrow
   */
  export type landownersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landowners
     */
    select?: landownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the landowners
     */
    omit?: landownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landownersInclude<ExtArgs> | null
    /**
     * Filter, which landowners to fetch.
     */
    where: landownersWhereUniqueInput
  }

  /**
   * landowners findFirst
   */
  export type landownersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landowners
     */
    select?: landownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the landowners
     */
    omit?: landownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landownersInclude<ExtArgs> | null
    /**
     * Filter, which landowners to fetch.
     */
    where?: landownersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of landowners to fetch.
     */
    orderBy?: landownersOrderByWithRelationInput | landownersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for landowners.
     */
    cursor?: landownersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` landowners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` landowners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of landowners.
     */
    distinct?: LandownersScalarFieldEnum | LandownersScalarFieldEnum[]
  }

  /**
   * landowners findFirstOrThrow
   */
  export type landownersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landowners
     */
    select?: landownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the landowners
     */
    omit?: landownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landownersInclude<ExtArgs> | null
    /**
     * Filter, which landowners to fetch.
     */
    where?: landownersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of landowners to fetch.
     */
    orderBy?: landownersOrderByWithRelationInput | landownersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for landowners.
     */
    cursor?: landownersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` landowners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` landowners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of landowners.
     */
    distinct?: LandownersScalarFieldEnum | LandownersScalarFieldEnum[]
  }

  /**
   * landowners findMany
   */
  export type landownersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landowners
     */
    select?: landownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the landowners
     */
    omit?: landownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landownersInclude<ExtArgs> | null
    /**
     * Filter, which landowners to fetch.
     */
    where?: landownersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of landowners to fetch.
     */
    orderBy?: landownersOrderByWithRelationInput | landownersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing landowners.
     */
    cursor?: landownersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` landowners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` landowners.
     */
    skip?: number
    distinct?: LandownersScalarFieldEnum | LandownersScalarFieldEnum[]
  }

  /**
   * landowners create
   */
  export type landownersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landowners
     */
    select?: landownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the landowners
     */
    omit?: landownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landownersInclude<ExtArgs> | null
    /**
     * The data needed to create a landowners.
     */
    data: XOR<landownersCreateInput, landownersUncheckedCreateInput>
  }

  /**
   * landowners createMany
   */
  export type landownersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many landowners.
     */
    data: landownersCreateManyInput | landownersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * landowners createManyAndReturn
   */
  export type landownersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landowners
     */
    select?: landownersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the landowners
     */
    omit?: landownersOmit<ExtArgs> | null
    /**
     * The data used to create many landowners.
     */
    data: landownersCreateManyInput | landownersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landownersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * landowners update
   */
  export type landownersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landowners
     */
    select?: landownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the landowners
     */
    omit?: landownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landownersInclude<ExtArgs> | null
    /**
     * The data needed to update a landowners.
     */
    data: XOR<landownersUpdateInput, landownersUncheckedUpdateInput>
    /**
     * Choose, which landowners to update.
     */
    where: landownersWhereUniqueInput
  }

  /**
   * landowners updateMany
   */
  export type landownersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update landowners.
     */
    data: XOR<landownersUpdateManyMutationInput, landownersUncheckedUpdateManyInput>
    /**
     * Filter which landowners to update
     */
    where?: landownersWhereInput
    /**
     * Limit how many landowners to update.
     */
    limit?: number
  }

  /**
   * landowners updateManyAndReturn
   */
  export type landownersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landowners
     */
    select?: landownersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the landowners
     */
    omit?: landownersOmit<ExtArgs> | null
    /**
     * The data used to update landowners.
     */
    data: XOR<landownersUpdateManyMutationInput, landownersUncheckedUpdateManyInput>
    /**
     * Filter which landowners to update
     */
    where?: landownersWhereInput
    /**
     * Limit how many landowners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landownersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * landowners upsert
   */
  export type landownersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landowners
     */
    select?: landownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the landowners
     */
    omit?: landownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landownersInclude<ExtArgs> | null
    /**
     * The filter to search for the landowners to update in case it exists.
     */
    where: landownersWhereUniqueInput
    /**
     * In case the landowners found by the `where` argument doesn't exist, create a new landowners with this data.
     */
    create: XOR<landownersCreateInput, landownersUncheckedCreateInput>
    /**
     * In case the landowners was found with the provided `where` argument, update it with this data.
     */
    update: XOR<landownersUpdateInput, landownersUncheckedUpdateInput>
  }

  /**
   * landowners delete
   */
  export type landownersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landowners
     */
    select?: landownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the landowners
     */
    omit?: landownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landownersInclude<ExtArgs> | null
    /**
     * Filter which landowners to delete.
     */
    where: landownersWhereUniqueInput
  }

  /**
   * landowners deleteMany
   */
  export type landownersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which landowners to delete
     */
    where?: landownersWhereInput
    /**
     * Limit how many landowners to delete.
     */
    limit?: number
  }

  /**
   * landowners.lands
   */
  export type landowners$landsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lands
     */
    select?: LandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lands
     */
    omit?: LandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandsInclude<ExtArgs> | null
    where?: LandsWhereInput
    orderBy?: LandsOrderByWithRelationInput | LandsOrderByWithRelationInput[]
    cursor?: LandsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LandsScalarFieldEnum | LandsScalarFieldEnum[]
  }

  /**
   * landowners without action
   */
  export type landownersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landowners
     */
    select?: landownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the landowners
     */
    omit?: landownersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landownersInclude<ExtArgs> | null
  }


  /**
   * Model companies
   */

  export type AggregateCompanies = {
    _count: CompaniesCountAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  export type CompaniesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    document_id: string | null
    company_name: string | null
  }

  export type CompaniesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    document_id: string | null
    company_name: string | null
  }

  export type CompaniesCountAggregateOutputType = {
    id: number
    userId: number
    document_id: number
    company_name: number
    _all: number
  }


  export type CompaniesMinAggregateInputType = {
    id?: true
    userId?: true
    document_id?: true
    company_name?: true
  }

  export type CompaniesMaxAggregateInputType = {
    id?: true
    userId?: true
    document_id?: true
    company_name?: true
  }

  export type CompaniesCountAggregateInputType = {
    id?: true
    userId?: true
    document_id?: true
    company_name?: true
    _all?: true
  }

  export type CompaniesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to aggregate.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned companies
    **/
    _count?: true | CompaniesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompaniesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompaniesMaxAggregateInputType
  }

  export type GetCompaniesAggregateType<T extends CompaniesAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanies[P]>
      : GetScalarType<T[P], AggregateCompanies[P]>
  }




  export type companiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companiesWhereInput
    orderBy?: companiesOrderByWithAggregationInput | companiesOrderByWithAggregationInput[]
    by: CompaniesScalarFieldEnum[] | CompaniesScalarFieldEnum
    having?: companiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompaniesCountAggregateInputType | true
    _min?: CompaniesMinAggregateInputType
    _max?: CompaniesMaxAggregateInputType
  }

  export type CompaniesGroupByOutputType = {
    id: string
    userId: string
    document_id: string
    company_name: string
    _count: CompaniesCountAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  type GetCompaniesGroupByPayload<T extends companiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompaniesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompaniesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompaniesGroupByOutputType[P]>
            : GetScalarType<T[P], CompaniesGroupByOutputType[P]>
        }
      >
    >


  export type companiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    document_id?: boolean
    company_name?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    projects?: boolean | companies$projectsArgs<ExtArgs>
    _count?: boolean | CompaniesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companies"]>

  export type companiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    document_id?: boolean
    company_name?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companies"]>

  export type companiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    document_id?: boolean
    company_name?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companies"]>

  export type companiesSelectScalar = {
    id?: boolean
    userId?: boolean
    document_id?: boolean
    company_name?: boolean
  }

  export type companiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "document_id" | "company_name", ExtArgs["result"]["companies"]>
  export type companiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    projects?: boolean | companies$projectsArgs<ExtArgs>
    _count?: boolean | CompaniesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type companiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type companiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $companiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "companies"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      document_id: string
      company_name: string
    }, ExtArgs["result"]["companies"]>
    composites: {}
  }

  type companiesGetPayload<S extends boolean | null | undefined | companiesDefaultArgs> = $Result.GetResult<Prisma.$companiesPayload, S>

  type companiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<companiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompaniesCountAggregateInputType | true
    }

  export interface companiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['companies'], meta: { name: 'companies' } }
    /**
     * Find zero or one Companies that matches the filter.
     * @param {companiesFindUniqueArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends companiesFindUniqueArgs>(args: SelectSubset<T, companiesFindUniqueArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Companies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {companiesFindUniqueOrThrowArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends companiesFindUniqueOrThrowArgs>(args: SelectSubset<T, companiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesFindFirstArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends companiesFindFirstArgs>(args?: SelectSubset<T, companiesFindFirstArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesFindFirstOrThrowArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends companiesFindFirstOrThrowArgs>(args?: SelectSubset<T, companiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.companies.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.companies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companiesWithIdOnly = await prisma.companies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends companiesFindManyArgs>(args?: SelectSubset<T, companiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Companies.
     * @param {companiesCreateArgs} args - Arguments to create a Companies.
     * @example
     * // Create one Companies
     * const Companies = await prisma.companies.create({
     *   data: {
     *     // ... data to create a Companies
     *   }
     * })
     * 
     */
    create<T extends companiesCreateArgs>(args: SelectSubset<T, companiesCreateArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {companiesCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const companies = await prisma.companies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends companiesCreateManyArgs>(args?: SelectSubset<T, companiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {companiesCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const companies = await prisma.companies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companiesWithIdOnly = await prisma.companies.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends companiesCreateManyAndReturnArgs>(args?: SelectSubset<T, companiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Companies.
     * @param {companiesDeleteArgs} args - Arguments to delete one Companies.
     * @example
     * // Delete one Companies
     * const Companies = await prisma.companies.delete({
     *   where: {
     *     // ... filter to delete one Companies
     *   }
     * })
     * 
     */
    delete<T extends companiesDeleteArgs>(args: SelectSubset<T, companiesDeleteArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Companies.
     * @param {companiesUpdateArgs} args - Arguments to update one Companies.
     * @example
     * // Update one Companies
     * const companies = await prisma.companies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends companiesUpdateArgs>(args: SelectSubset<T, companiesUpdateArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {companiesDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.companies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends companiesDeleteManyArgs>(args?: SelectSubset<T, companiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const companies = await prisma.companies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends companiesUpdateManyArgs>(args: SelectSubset<T, companiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {companiesUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const companies = await prisma.companies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companiesWithIdOnly = await prisma.companies.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends companiesUpdateManyAndReturnArgs>(args: SelectSubset<T, companiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Companies.
     * @param {companiesUpsertArgs} args - Arguments to update or create a Companies.
     * @example
     * // Update or create a Companies
     * const companies = await prisma.companies.upsert({
     *   create: {
     *     // ... data to create a Companies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Companies we want to update
     *   }
     * })
     */
    upsert<T extends companiesUpsertArgs>(args: SelectSubset<T, companiesUpsertArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.companies.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends companiesCountArgs>(
      args?: Subset<T, companiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompaniesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompaniesAggregateArgs>(args: Subset<T, CompaniesAggregateArgs>): Prisma.PrismaPromise<GetCompaniesAggregateType<T>>

    /**
     * Group by Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends companiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companiesGroupByArgs['orderBy'] }
        : { orderBy?: companiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, companiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompaniesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the companies model
   */
  readonly fields: companiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for companies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projects<T extends companies$projectsArgs<ExtArgs> = {}>(args?: Subset<T, companies$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the companies model
   */
  interface companiesFieldRefs {
    readonly id: FieldRef<"companies", 'String'>
    readonly userId: FieldRef<"companies", 'String'>
    readonly document_id: FieldRef<"companies", 'String'>
    readonly company_name: FieldRef<"companies", 'String'>
  }
    

  // Custom InputTypes
  /**
   * companies findUnique
   */
  export type companiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies findUniqueOrThrow
   */
  export type companiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies findFirst
   */
  export type companiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * companies findFirstOrThrow
   */
  export type companiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * companies findMany
   */
  export type companiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing companies.
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * companies create
   */
  export type companiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * The data needed to create a companies.
     */
    data: XOR<companiesCreateInput, companiesUncheckedCreateInput>
  }

  /**
   * companies createMany
   */
  export type companiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companiesCreateManyInput | companiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * companies createManyAndReturn
   */
  export type companiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * The data used to create many companies.
     */
    data: companiesCreateManyInput | companiesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * companies update
   */
  export type companiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * The data needed to update a companies.
     */
    data: XOR<companiesUpdateInput, companiesUncheckedUpdateInput>
    /**
     * Choose, which companies to update.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies updateMany
   */
  export type companiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companiesUpdateManyMutationInput, companiesUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companiesWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
  }

  /**
   * companies updateManyAndReturn
   */
  export type companiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * The data used to update companies.
     */
    data: XOR<companiesUpdateManyMutationInput, companiesUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companiesWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * companies upsert
   */
  export type companiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * The filter to search for the companies to update in case it exists.
     */
    where: companiesWhereUniqueInput
    /**
     * In case the companies found by the `where` argument doesn't exist, create a new companies with this data.
     */
    create: XOR<companiesCreateInput, companiesUncheckedCreateInput>
    /**
     * In case the companies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companiesUpdateInput, companiesUncheckedUpdateInput>
  }

  /**
   * companies delete
   */
  export type companiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter which companies to delete.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies deleteMany
   */
  export type companiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companiesWhereInput
    /**
     * Limit how many companies to delete.
     */
    limit?: number
  }

  /**
   * companies.projects
   */
  export type companies$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * companies without action
   */
  export type companiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
  }


  /**
   * Model investors
   */

  export type AggregateInvestors = {
    _count: InvestorsCountAggregateOutputType | null
    _min: InvestorsMinAggregateOutputType | null
    _max: InvestorsMaxAggregateOutputType | null
  }

  export type InvestorsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    document_id: string | null
  }

  export type InvestorsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    document_id: string | null
  }

  export type InvestorsCountAggregateOutputType = {
    id: number
    userId: number
    document_id: number
    _all: number
  }


  export type InvestorsMinAggregateInputType = {
    id?: true
    userId?: true
    document_id?: true
  }

  export type InvestorsMaxAggregateInputType = {
    id?: true
    userId?: true
    document_id?: true
  }

  export type InvestorsCountAggregateInputType = {
    id?: true
    userId?: true
    document_id?: true
    _all?: true
  }

  export type InvestorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which investors to aggregate.
     */
    where?: investorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of investors to fetch.
     */
    orderBy?: investorsOrderByWithRelationInput | investorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: investorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` investors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` investors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned investors
    **/
    _count?: true | InvestorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvestorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvestorsMaxAggregateInputType
  }

  export type GetInvestorsAggregateType<T extends InvestorsAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestors[P]>
      : GetScalarType<T[P], AggregateInvestors[P]>
  }




  export type investorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: investorsWhereInput
    orderBy?: investorsOrderByWithAggregationInput | investorsOrderByWithAggregationInput[]
    by: InvestorsScalarFieldEnum[] | InvestorsScalarFieldEnum
    having?: investorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvestorsCountAggregateInputType | true
    _min?: InvestorsMinAggregateInputType
    _max?: InvestorsMaxAggregateInputType
  }

  export type InvestorsGroupByOutputType = {
    id: string
    userId: string
    document_id: string
    _count: InvestorsCountAggregateOutputType | null
    _min: InvestorsMinAggregateOutputType | null
    _max: InvestorsMaxAggregateOutputType | null
  }

  type GetInvestorsGroupByPayload<T extends investorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvestorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvestorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvestorsGroupByOutputType[P]>
            : GetScalarType<T[P], InvestorsGroupByOutputType[P]>
        }
      >
    >


  export type investorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    document_id?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    invesiments?: boolean | investors$invesimentsArgs<ExtArgs>
    _count?: boolean | InvestorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investors"]>

  export type investorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    document_id?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investors"]>

  export type investorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    document_id?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investors"]>

  export type investorsSelectScalar = {
    id?: boolean
    userId?: boolean
    document_id?: boolean
  }

  export type investorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "document_id", ExtArgs["result"]["investors"]>
  export type investorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    invesiments?: boolean | investors$invesimentsArgs<ExtArgs>
    _count?: boolean | InvestorsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type investorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type investorsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $investorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "investors"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      invesiments: Prisma.$InvesimentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      document_id: string
    }, ExtArgs["result"]["investors"]>
    composites: {}
  }

  type investorsGetPayload<S extends boolean | null | undefined | investorsDefaultArgs> = $Result.GetResult<Prisma.$investorsPayload, S>

  type investorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<investorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvestorsCountAggregateInputType | true
    }

  export interface investorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['investors'], meta: { name: 'investors' } }
    /**
     * Find zero or one Investors that matches the filter.
     * @param {investorsFindUniqueArgs} args - Arguments to find a Investors
     * @example
     * // Get one Investors
     * const investors = await prisma.investors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends investorsFindUniqueArgs>(args: SelectSubset<T, investorsFindUniqueArgs<ExtArgs>>): Prisma__investorsClient<$Result.GetResult<Prisma.$investorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Investors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {investorsFindUniqueOrThrowArgs} args - Arguments to find a Investors
     * @example
     * // Get one Investors
     * const investors = await prisma.investors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends investorsFindUniqueOrThrowArgs>(args: SelectSubset<T, investorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__investorsClient<$Result.GetResult<Prisma.$investorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {investorsFindFirstArgs} args - Arguments to find a Investors
     * @example
     * // Get one Investors
     * const investors = await prisma.investors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends investorsFindFirstArgs>(args?: SelectSubset<T, investorsFindFirstArgs<ExtArgs>>): Prisma__investorsClient<$Result.GetResult<Prisma.$investorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {investorsFindFirstOrThrowArgs} args - Arguments to find a Investors
     * @example
     * // Get one Investors
     * const investors = await prisma.investors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends investorsFindFirstOrThrowArgs>(args?: SelectSubset<T, investorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__investorsClient<$Result.GetResult<Prisma.$investorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Investors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {investorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Investors
     * const investors = await prisma.investors.findMany()
     * 
     * // Get first 10 Investors
     * const investors = await prisma.investors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investorsWithIdOnly = await prisma.investors.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends investorsFindManyArgs>(args?: SelectSubset<T, investorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$investorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Investors.
     * @param {investorsCreateArgs} args - Arguments to create a Investors.
     * @example
     * // Create one Investors
     * const Investors = await prisma.investors.create({
     *   data: {
     *     // ... data to create a Investors
     *   }
     * })
     * 
     */
    create<T extends investorsCreateArgs>(args: SelectSubset<T, investorsCreateArgs<ExtArgs>>): Prisma__investorsClient<$Result.GetResult<Prisma.$investorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Investors.
     * @param {investorsCreateManyArgs} args - Arguments to create many Investors.
     * @example
     * // Create many Investors
     * const investors = await prisma.investors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends investorsCreateManyArgs>(args?: SelectSubset<T, investorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Investors and returns the data saved in the database.
     * @param {investorsCreateManyAndReturnArgs} args - Arguments to create many Investors.
     * @example
     * // Create many Investors
     * const investors = await prisma.investors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Investors and only return the `id`
     * const investorsWithIdOnly = await prisma.investors.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends investorsCreateManyAndReturnArgs>(args?: SelectSubset<T, investorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$investorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Investors.
     * @param {investorsDeleteArgs} args - Arguments to delete one Investors.
     * @example
     * // Delete one Investors
     * const Investors = await prisma.investors.delete({
     *   where: {
     *     // ... filter to delete one Investors
     *   }
     * })
     * 
     */
    delete<T extends investorsDeleteArgs>(args: SelectSubset<T, investorsDeleteArgs<ExtArgs>>): Prisma__investorsClient<$Result.GetResult<Prisma.$investorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Investors.
     * @param {investorsUpdateArgs} args - Arguments to update one Investors.
     * @example
     * // Update one Investors
     * const investors = await prisma.investors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends investorsUpdateArgs>(args: SelectSubset<T, investorsUpdateArgs<ExtArgs>>): Prisma__investorsClient<$Result.GetResult<Prisma.$investorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Investors.
     * @param {investorsDeleteManyArgs} args - Arguments to filter Investors to delete.
     * @example
     * // Delete a few Investors
     * const { count } = await prisma.investors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends investorsDeleteManyArgs>(args?: SelectSubset<T, investorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {investorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Investors
     * const investors = await prisma.investors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends investorsUpdateManyArgs>(args: SelectSubset<T, investorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investors and returns the data updated in the database.
     * @param {investorsUpdateManyAndReturnArgs} args - Arguments to update many Investors.
     * @example
     * // Update many Investors
     * const investors = await prisma.investors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Investors and only return the `id`
     * const investorsWithIdOnly = await prisma.investors.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends investorsUpdateManyAndReturnArgs>(args: SelectSubset<T, investorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$investorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Investors.
     * @param {investorsUpsertArgs} args - Arguments to update or create a Investors.
     * @example
     * // Update or create a Investors
     * const investors = await prisma.investors.upsert({
     *   create: {
     *     // ... data to create a Investors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Investors we want to update
     *   }
     * })
     */
    upsert<T extends investorsUpsertArgs>(args: SelectSubset<T, investorsUpsertArgs<ExtArgs>>): Prisma__investorsClient<$Result.GetResult<Prisma.$investorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Investors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {investorsCountArgs} args - Arguments to filter Investors to count.
     * @example
     * // Count the number of Investors
     * const count = await prisma.investors.count({
     *   where: {
     *     // ... the filter for the Investors we want to count
     *   }
     * })
    **/
    count<T extends investorsCountArgs>(
      args?: Subset<T, investorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvestorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Investors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvestorsAggregateArgs>(args: Subset<T, InvestorsAggregateArgs>): Prisma.PrismaPromise<GetInvestorsAggregateType<T>>

    /**
     * Group by Investors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {investorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends investorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: investorsGroupByArgs['orderBy'] }
        : { orderBy?: investorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, investorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the investors model
   */
  readonly fields: investorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for investors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__investorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invesiments<T extends investors$invesimentsArgs<ExtArgs> = {}>(args?: Subset<T, investors$invesimentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvesimentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the investors model
   */
  interface investorsFieldRefs {
    readonly id: FieldRef<"investors", 'String'>
    readonly userId: FieldRef<"investors", 'String'>
    readonly document_id: FieldRef<"investors", 'String'>
  }
    

  // Custom InputTypes
  /**
   * investors findUnique
   */
  export type investorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investors
     */
    select?: investorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investors
     */
    omit?: investorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investorsInclude<ExtArgs> | null
    /**
     * Filter, which investors to fetch.
     */
    where: investorsWhereUniqueInput
  }

  /**
   * investors findUniqueOrThrow
   */
  export type investorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investors
     */
    select?: investorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investors
     */
    omit?: investorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investorsInclude<ExtArgs> | null
    /**
     * Filter, which investors to fetch.
     */
    where: investorsWhereUniqueInput
  }

  /**
   * investors findFirst
   */
  export type investorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investors
     */
    select?: investorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investors
     */
    omit?: investorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investorsInclude<ExtArgs> | null
    /**
     * Filter, which investors to fetch.
     */
    where?: investorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of investors to fetch.
     */
    orderBy?: investorsOrderByWithRelationInput | investorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for investors.
     */
    cursor?: investorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` investors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` investors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of investors.
     */
    distinct?: InvestorsScalarFieldEnum | InvestorsScalarFieldEnum[]
  }

  /**
   * investors findFirstOrThrow
   */
  export type investorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investors
     */
    select?: investorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investors
     */
    omit?: investorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investorsInclude<ExtArgs> | null
    /**
     * Filter, which investors to fetch.
     */
    where?: investorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of investors to fetch.
     */
    orderBy?: investorsOrderByWithRelationInput | investorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for investors.
     */
    cursor?: investorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` investors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` investors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of investors.
     */
    distinct?: InvestorsScalarFieldEnum | InvestorsScalarFieldEnum[]
  }

  /**
   * investors findMany
   */
  export type investorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investors
     */
    select?: investorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investors
     */
    omit?: investorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investorsInclude<ExtArgs> | null
    /**
     * Filter, which investors to fetch.
     */
    where?: investorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of investors to fetch.
     */
    orderBy?: investorsOrderByWithRelationInput | investorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing investors.
     */
    cursor?: investorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` investors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` investors.
     */
    skip?: number
    distinct?: InvestorsScalarFieldEnum | InvestorsScalarFieldEnum[]
  }

  /**
   * investors create
   */
  export type investorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investors
     */
    select?: investorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investors
     */
    omit?: investorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investorsInclude<ExtArgs> | null
    /**
     * The data needed to create a investors.
     */
    data: XOR<investorsCreateInput, investorsUncheckedCreateInput>
  }

  /**
   * investors createMany
   */
  export type investorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many investors.
     */
    data: investorsCreateManyInput | investorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * investors createManyAndReturn
   */
  export type investorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investors
     */
    select?: investorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the investors
     */
    omit?: investorsOmit<ExtArgs> | null
    /**
     * The data used to create many investors.
     */
    data: investorsCreateManyInput | investorsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investorsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * investors update
   */
  export type investorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investors
     */
    select?: investorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investors
     */
    omit?: investorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investorsInclude<ExtArgs> | null
    /**
     * The data needed to update a investors.
     */
    data: XOR<investorsUpdateInput, investorsUncheckedUpdateInput>
    /**
     * Choose, which investors to update.
     */
    where: investorsWhereUniqueInput
  }

  /**
   * investors updateMany
   */
  export type investorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update investors.
     */
    data: XOR<investorsUpdateManyMutationInput, investorsUncheckedUpdateManyInput>
    /**
     * Filter which investors to update
     */
    where?: investorsWhereInput
    /**
     * Limit how many investors to update.
     */
    limit?: number
  }

  /**
   * investors updateManyAndReturn
   */
  export type investorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investors
     */
    select?: investorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the investors
     */
    omit?: investorsOmit<ExtArgs> | null
    /**
     * The data used to update investors.
     */
    data: XOR<investorsUpdateManyMutationInput, investorsUncheckedUpdateManyInput>
    /**
     * Filter which investors to update
     */
    where?: investorsWhereInput
    /**
     * Limit how many investors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investorsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * investors upsert
   */
  export type investorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investors
     */
    select?: investorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investors
     */
    omit?: investorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investorsInclude<ExtArgs> | null
    /**
     * The filter to search for the investors to update in case it exists.
     */
    where: investorsWhereUniqueInput
    /**
     * In case the investors found by the `where` argument doesn't exist, create a new investors with this data.
     */
    create: XOR<investorsCreateInput, investorsUncheckedCreateInput>
    /**
     * In case the investors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<investorsUpdateInput, investorsUncheckedUpdateInput>
  }

  /**
   * investors delete
   */
  export type investorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investors
     */
    select?: investorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investors
     */
    omit?: investorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investorsInclude<ExtArgs> | null
    /**
     * Filter which investors to delete.
     */
    where: investorsWhereUniqueInput
  }

  /**
   * investors deleteMany
   */
  export type investorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which investors to delete
     */
    where?: investorsWhereInput
    /**
     * Limit how many investors to delete.
     */
    limit?: number
  }

  /**
   * investors.invesiments
   */
  export type investors$invesimentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invesiment
     */
    select?: InvesimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invesiment
     */
    omit?: InvesimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvesimentInclude<ExtArgs> | null
    where?: InvesimentWhereInput
    orderBy?: InvesimentOrderByWithRelationInput | InvesimentOrderByWithRelationInput[]
    cursor?: InvesimentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvesimentScalarFieldEnum | InvesimentScalarFieldEnum[]
  }

  /**
   * investors without action
   */
  export type investorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investors
     */
    select?: investorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investors
     */
    omit?: investorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investorsInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    powerKw: number | null
    cost: number | null
    estimatedReturn: number | null
    area: number | null
  }

  export type ProjectSumAggregateOutputType = {
    powerKw: number | null
    cost: number | null
    estimatedReturn: number | null
    area: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    companiesId: string | null
    powerKw: number | null
    cost: number | null
    status: $Enums.StatusApproval | null
    estimatedReturn: number | null
    createdAt: Date | null
    title: string | null
    description: string | null
    area: number | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    companiesId: string | null
    powerKw: number | null
    cost: number | null
    status: $Enums.StatusApproval | null
    estimatedReturn: number | null
    createdAt: Date | null
    title: string | null
    description: string | null
    area: number | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    projectId: number
    companiesId: number
    powerKw: number
    cost: number
    status: number
    estimatedReturn: number
    createdAt: number
    title: number
    description: number
    area: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    powerKw?: true
    cost?: true
    estimatedReturn?: true
    area?: true
  }

  export type ProjectSumAggregateInputType = {
    powerKw?: true
    cost?: true
    estimatedReturn?: true
    area?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    projectId?: true
    companiesId?: true
    powerKw?: true
    cost?: true
    status?: true
    estimatedReturn?: true
    createdAt?: true
    title?: true
    description?: true
    area?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    projectId?: true
    companiesId?: true
    powerKw?: true
    cost?: true
    status?: true
    estimatedReturn?: true
    createdAt?: true
    title?: true
    description?: true
    area?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    projectId?: true
    companiesId?: true
    powerKw?: true
    cost?: true
    status?: true
    estimatedReturn?: true
    createdAt?: true
    title?: true
    description?: true
    area?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    projectId: string
    companiesId: string | null
    powerKw: number
    cost: number
    status: $Enums.StatusApproval
    estimatedReturn: number
    createdAt: Date
    title: string
    description: string
    area: number
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    companiesId?: boolean
    powerKw?: boolean
    cost?: boolean
    status?: boolean
    estimatedReturn?: boolean
    createdAt?: boolean
    title?: boolean
    description?: boolean
    area?: boolean
    landProject?: boolean | LandsDefaultArgs<ExtArgs>
    company?: boolean | Project$companyArgs<ExtArgs>
    investments?: boolean | Project$investmentsArgs<ExtArgs>
    projectsProposal?: boolean | Project$projectsProposalArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    companiesId?: boolean
    powerKw?: boolean
    cost?: boolean
    status?: boolean
    estimatedReturn?: boolean
    createdAt?: boolean
    title?: boolean
    description?: boolean
    area?: boolean
    landProject?: boolean | LandsDefaultArgs<ExtArgs>
    company?: boolean | Project$companyArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    companiesId?: boolean
    powerKw?: boolean
    cost?: boolean
    status?: boolean
    estimatedReturn?: boolean
    createdAt?: boolean
    title?: boolean
    description?: boolean
    area?: boolean
    landProject?: boolean | LandsDefaultArgs<ExtArgs>
    company?: boolean | Project$companyArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    projectId?: boolean
    companiesId?: boolean
    powerKw?: boolean
    cost?: boolean
    status?: boolean
    estimatedReturn?: boolean
    createdAt?: boolean
    title?: boolean
    description?: boolean
    area?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "companiesId" | "powerKw" | "cost" | "status" | "estimatedReturn" | "createdAt" | "title" | "description" | "area", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    landProject?: boolean | LandsDefaultArgs<ExtArgs>
    company?: boolean | Project$companyArgs<ExtArgs>
    investments?: boolean | Project$investmentsArgs<ExtArgs>
    projectsProposal?: boolean | Project$projectsProposalArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    landProject?: boolean | LandsDefaultArgs<ExtArgs>
    company?: boolean | Project$companyArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    landProject?: boolean | LandsDefaultArgs<ExtArgs>
    company?: boolean | Project$companyArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      landProject: Prisma.$LandsPayload<ExtArgs>
      company: Prisma.$companiesPayload<ExtArgs> | null
      investments: Prisma.$InvesimentPayload<ExtArgs>[]
      projectsProposal: Prisma.$projectProposalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      companiesId: string | null
      powerKw: number
      cost: number
      status: $Enums.StatusApproval
      estimatedReturn: number
      createdAt: Date
      title: string
      description: string
      area: number
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    landProject<T extends LandsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LandsDefaultArgs<ExtArgs>>): Prisma__LandsClient<$Result.GetResult<Prisma.$LandsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    company<T extends Project$companyArgs<ExtArgs> = {}>(args?: Subset<T, Project$companyArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    investments<T extends Project$investmentsArgs<ExtArgs> = {}>(args?: Subset<T, Project$investmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvesimentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectsProposal<T extends Project$projectsProposalArgs<ExtArgs> = {}>(args?: Subset<T, Project$projectsProposalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly projectId: FieldRef<"Project", 'String'>
    readonly companiesId: FieldRef<"Project", 'String'>
    readonly powerKw: FieldRef<"Project", 'Float'>
    readonly cost: FieldRef<"Project", 'Float'>
    readonly status: FieldRef<"Project", 'StatusApproval'>
    readonly estimatedReturn: FieldRef<"Project", 'Float'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly title: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly area: FieldRef<"Project", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.company
   */
  export type Project$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    where?: companiesWhereInput
  }

  /**
   * Project.investments
   */
  export type Project$investmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invesiment
     */
    select?: InvesimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invesiment
     */
    omit?: InvesimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvesimentInclude<ExtArgs> | null
    where?: InvesimentWhereInput
    orderBy?: InvesimentOrderByWithRelationInput | InvesimentOrderByWithRelationInput[]
    cursor?: InvesimentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvesimentScalarFieldEnum | InvesimentScalarFieldEnum[]
  }

  /**
   * Project.projectsProposal
   */
  export type Project$projectsProposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectProposal
     */
    select?: projectProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectProposal
     */
    omit?: projectProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectProposalInclude<ExtArgs> | null
    where?: projectProposalWhereInput
    orderBy?: projectProposalOrderByWithRelationInput | projectProposalOrderByWithRelationInput[]
    cursor?: projectProposalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectProposalScalarFieldEnum | ProjectProposalScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Invesiment
   */

  export type AggregateInvesiment = {
    _count: InvesimentCountAggregateOutputType | null
    _avg: InvesimentAvgAggregateOutputType | null
    _sum: InvesimentSumAggregateOutputType | null
    _min: InvesimentMinAggregateOutputType | null
    _max: InvesimentMaxAggregateOutputType | null
  }

  export type InvesimentAvgAggregateOutputType = {
    valueInvested: number | null
  }

  export type InvesimentSumAggregateOutputType = {
    valueInvested: number | null
  }

  export type InvesimentMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    investorId: string | null
    valueInvested: number | null
    investedDate: Date | null
    ownerAgree: $Enums.OwnerAgree | null
    compAgree: $Enums.CompanyAgree | null
    title: string | null
    description: string | null
    status: $Enums.StatusInvesiment | null
  }

  export type InvesimentMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    investorId: string | null
    valueInvested: number | null
    investedDate: Date | null
    ownerAgree: $Enums.OwnerAgree | null
    compAgree: $Enums.CompanyAgree | null
    title: string | null
    description: string | null
    status: $Enums.StatusInvesiment | null
  }

  export type InvesimentCountAggregateOutputType = {
    id: number
    projectId: number
    investorId: number
    valueInvested: number
    investedDate: number
    ownerAgree: number
    compAgree: number
    title: number
    description: number
    status: number
    _all: number
  }


  export type InvesimentAvgAggregateInputType = {
    valueInvested?: true
  }

  export type InvesimentSumAggregateInputType = {
    valueInvested?: true
  }

  export type InvesimentMinAggregateInputType = {
    id?: true
    projectId?: true
    investorId?: true
    valueInvested?: true
    investedDate?: true
    ownerAgree?: true
    compAgree?: true
    title?: true
    description?: true
    status?: true
  }

  export type InvesimentMaxAggregateInputType = {
    id?: true
    projectId?: true
    investorId?: true
    valueInvested?: true
    investedDate?: true
    ownerAgree?: true
    compAgree?: true
    title?: true
    description?: true
    status?: true
  }

  export type InvesimentCountAggregateInputType = {
    id?: true
    projectId?: true
    investorId?: true
    valueInvested?: true
    investedDate?: true
    ownerAgree?: true
    compAgree?: true
    title?: true
    description?: true
    status?: true
    _all?: true
  }

  export type InvesimentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invesiment to aggregate.
     */
    where?: InvesimentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invesiments to fetch.
     */
    orderBy?: InvesimentOrderByWithRelationInput | InvesimentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvesimentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invesiments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invesiments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invesiments
    **/
    _count?: true | InvesimentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvesimentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvesimentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvesimentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvesimentMaxAggregateInputType
  }

  export type GetInvesimentAggregateType<T extends InvesimentAggregateArgs> = {
        [P in keyof T & keyof AggregateInvesiment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvesiment[P]>
      : GetScalarType<T[P], AggregateInvesiment[P]>
  }




  export type InvesimentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvesimentWhereInput
    orderBy?: InvesimentOrderByWithAggregationInput | InvesimentOrderByWithAggregationInput[]
    by: InvesimentScalarFieldEnum[] | InvesimentScalarFieldEnum
    having?: InvesimentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvesimentCountAggregateInputType | true
    _avg?: InvesimentAvgAggregateInputType
    _sum?: InvesimentSumAggregateInputType
    _min?: InvesimentMinAggregateInputType
    _max?: InvesimentMaxAggregateInputType
  }

  export type InvesimentGroupByOutputType = {
    id: string
    projectId: string
    investorId: string
    valueInvested: number
    investedDate: Date
    ownerAgree: $Enums.OwnerAgree
    compAgree: $Enums.CompanyAgree
    title: string
    description: string
    status: $Enums.StatusInvesiment
    _count: InvesimentCountAggregateOutputType | null
    _avg: InvesimentAvgAggregateOutputType | null
    _sum: InvesimentSumAggregateOutputType | null
    _min: InvesimentMinAggregateOutputType | null
    _max: InvesimentMaxAggregateOutputType | null
  }

  type GetInvesimentGroupByPayload<T extends InvesimentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvesimentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvesimentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvesimentGroupByOutputType[P]>
            : GetScalarType<T[P], InvesimentGroupByOutputType[P]>
        }
      >
    >


  export type InvesimentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    investorId?: boolean
    valueInvested?: boolean
    investedDate?: boolean
    ownerAgree?: boolean
    compAgree?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    investor?: boolean | Invesiment$investorArgs<ExtArgs>
  }, ExtArgs["result"]["invesiment"]>

  export type InvesimentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    investorId?: boolean
    valueInvested?: boolean
    investedDate?: boolean
    ownerAgree?: boolean
    compAgree?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    investor?: boolean | Invesiment$investorArgs<ExtArgs>
  }, ExtArgs["result"]["invesiment"]>

  export type InvesimentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    investorId?: boolean
    valueInvested?: boolean
    investedDate?: boolean
    ownerAgree?: boolean
    compAgree?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    investor?: boolean | Invesiment$investorArgs<ExtArgs>
  }, ExtArgs["result"]["invesiment"]>

  export type InvesimentSelectScalar = {
    id?: boolean
    projectId?: boolean
    investorId?: boolean
    valueInvested?: boolean
    investedDate?: boolean
    ownerAgree?: boolean
    compAgree?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
  }

  export type InvesimentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "investorId" | "valueInvested" | "investedDate" | "ownerAgree" | "compAgree" | "title" | "description" | "status", ExtArgs["result"]["invesiment"]>
  export type InvesimentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    investor?: boolean | Invesiment$investorArgs<ExtArgs>
  }
  export type InvesimentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    investor?: boolean | Invesiment$investorArgs<ExtArgs>
  }
  export type InvesimentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    investor?: boolean | Invesiment$investorArgs<ExtArgs>
  }

  export type $InvesimentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invesiment"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      investor: Prisma.$investorsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      investorId: string
      valueInvested: number
      investedDate: Date
      ownerAgree: $Enums.OwnerAgree
      compAgree: $Enums.CompanyAgree
      title: string
      description: string
      status: $Enums.StatusInvesiment
    }, ExtArgs["result"]["invesiment"]>
    composites: {}
  }

  type InvesimentGetPayload<S extends boolean | null | undefined | InvesimentDefaultArgs> = $Result.GetResult<Prisma.$InvesimentPayload, S>

  type InvesimentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvesimentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvesimentCountAggregateInputType | true
    }

  export interface InvesimentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invesiment'], meta: { name: 'Invesiment' } }
    /**
     * Find zero or one Invesiment that matches the filter.
     * @param {InvesimentFindUniqueArgs} args - Arguments to find a Invesiment
     * @example
     * // Get one Invesiment
     * const invesiment = await prisma.invesiment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvesimentFindUniqueArgs>(args: SelectSubset<T, InvesimentFindUniqueArgs<ExtArgs>>): Prisma__InvesimentClient<$Result.GetResult<Prisma.$InvesimentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invesiment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvesimentFindUniqueOrThrowArgs} args - Arguments to find a Invesiment
     * @example
     * // Get one Invesiment
     * const invesiment = await prisma.invesiment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvesimentFindUniqueOrThrowArgs>(args: SelectSubset<T, InvesimentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvesimentClient<$Result.GetResult<Prisma.$InvesimentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invesiment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvesimentFindFirstArgs} args - Arguments to find a Invesiment
     * @example
     * // Get one Invesiment
     * const invesiment = await prisma.invesiment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvesimentFindFirstArgs>(args?: SelectSubset<T, InvesimentFindFirstArgs<ExtArgs>>): Prisma__InvesimentClient<$Result.GetResult<Prisma.$InvesimentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invesiment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvesimentFindFirstOrThrowArgs} args - Arguments to find a Invesiment
     * @example
     * // Get one Invesiment
     * const invesiment = await prisma.invesiment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvesimentFindFirstOrThrowArgs>(args?: SelectSubset<T, InvesimentFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvesimentClient<$Result.GetResult<Prisma.$InvesimentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invesiments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvesimentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invesiments
     * const invesiments = await prisma.invesiment.findMany()
     * 
     * // Get first 10 Invesiments
     * const invesiments = await prisma.invesiment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invesimentWithIdOnly = await prisma.invesiment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvesimentFindManyArgs>(args?: SelectSubset<T, InvesimentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvesimentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invesiment.
     * @param {InvesimentCreateArgs} args - Arguments to create a Invesiment.
     * @example
     * // Create one Invesiment
     * const Invesiment = await prisma.invesiment.create({
     *   data: {
     *     // ... data to create a Invesiment
     *   }
     * })
     * 
     */
    create<T extends InvesimentCreateArgs>(args: SelectSubset<T, InvesimentCreateArgs<ExtArgs>>): Prisma__InvesimentClient<$Result.GetResult<Prisma.$InvesimentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invesiments.
     * @param {InvesimentCreateManyArgs} args - Arguments to create many Invesiments.
     * @example
     * // Create many Invesiments
     * const invesiment = await prisma.invesiment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvesimentCreateManyArgs>(args?: SelectSubset<T, InvesimentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invesiments and returns the data saved in the database.
     * @param {InvesimentCreateManyAndReturnArgs} args - Arguments to create many Invesiments.
     * @example
     * // Create many Invesiments
     * const invesiment = await prisma.invesiment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invesiments and only return the `id`
     * const invesimentWithIdOnly = await prisma.invesiment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvesimentCreateManyAndReturnArgs>(args?: SelectSubset<T, InvesimentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvesimentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invesiment.
     * @param {InvesimentDeleteArgs} args - Arguments to delete one Invesiment.
     * @example
     * // Delete one Invesiment
     * const Invesiment = await prisma.invesiment.delete({
     *   where: {
     *     // ... filter to delete one Invesiment
     *   }
     * })
     * 
     */
    delete<T extends InvesimentDeleteArgs>(args: SelectSubset<T, InvesimentDeleteArgs<ExtArgs>>): Prisma__InvesimentClient<$Result.GetResult<Prisma.$InvesimentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invesiment.
     * @param {InvesimentUpdateArgs} args - Arguments to update one Invesiment.
     * @example
     * // Update one Invesiment
     * const invesiment = await prisma.invesiment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvesimentUpdateArgs>(args: SelectSubset<T, InvesimentUpdateArgs<ExtArgs>>): Prisma__InvesimentClient<$Result.GetResult<Prisma.$InvesimentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invesiments.
     * @param {InvesimentDeleteManyArgs} args - Arguments to filter Invesiments to delete.
     * @example
     * // Delete a few Invesiments
     * const { count } = await prisma.invesiment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvesimentDeleteManyArgs>(args?: SelectSubset<T, InvesimentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invesiments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvesimentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invesiments
     * const invesiment = await prisma.invesiment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvesimentUpdateManyArgs>(args: SelectSubset<T, InvesimentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invesiments and returns the data updated in the database.
     * @param {InvesimentUpdateManyAndReturnArgs} args - Arguments to update many Invesiments.
     * @example
     * // Update many Invesiments
     * const invesiment = await prisma.invesiment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invesiments and only return the `id`
     * const invesimentWithIdOnly = await prisma.invesiment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvesimentUpdateManyAndReturnArgs>(args: SelectSubset<T, InvesimentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvesimentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invesiment.
     * @param {InvesimentUpsertArgs} args - Arguments to update or create a Invesiment.
     * @example
     * // Update or create a Invesiment
     * const invesiment = await prisma.invesiment.upsert({
     *   create: {
     *     // ... data to create a Invesiment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invesiment we want to update
     *   }
     * })
     */
    upsert<T extends InvesimentUpsertArgs>(args: SelectSubset<T, InvesimentUpsertArgs<ExtArgs>>): Prisma__InvesimentClient<$Result.GetResult<Prisma.$InvesimentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invesiments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvesimentCountArgs} args - Arguments to filter Invesiments to count.
     * @example
     * // Count the number of Invesiments
     * const count = await prisma.invesiment.count({
     *   where: {
     *     // ... the filter for the Invesiments we want to count
     *   }
     * })
    **/
    count<T extends InvesimentCountArgs>(
      args?: Subset<T, InvesimentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvesimentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invesiment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvesimentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvesimentAggregateArgs>(args: Subset<T, InvesimentAggregateArgs>): Prisma.PrismaPromise<GetInvesimentAggregateType<T>>

    /**
     * Group by Invesiment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvesimentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvesimentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvesimentGroupByArgs['orderBy'] }
        : { orderBy?: InvesimentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvesimentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvesimentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invesiment model
   */
  readonly fields: InvesimentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invesiment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvesimentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    investor<T extends Invesiment$investorArgs<ExtArgs> = {}>(args?: Subset<T, Invesiment$investorArgs<ExtArgs>>): Prisma__investorsClient<$Result.GetResult<Prisma.$investorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invesiment model
   */
  interface InvesimentFieldRefs {
    readonly id: FieldRef<"Invesiment", 'String'>
    readonly projectId: FieldRef<"Invesiment", 'String'>
    readonly investorId: FieldRef<"Invesiment", 'String'>
    readonly valueInvested: FieldRef<"Invesiment", 'Float'>
    readonly investedDate: FieldRef<"Invesiment", 'DateTime'>
    readonly ownerAgree: FieldRef<"Invesiment", 'OwnerAgree'>
    readonly compAgree: FieldRef<"Invesiment", 'CompanyAgree'>
    readonly title: FieldRef<"Invesiment", 'String'>
    readonly description: FieldRef<"Invesiment", 'String'>
    readonly status: FieldRef<"Invesiment", 'StatusInvesiment'>
  }
    

  // Custom InputTypes
  /**
   * Invesiment findUnique
   */
  export type InvesimentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invesiment
     */
    select?: InvesimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invesiment
     */
    omit?: InvesimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvesimentInclude<ExtArgs> | null
    /**
     * Filter, which Invesiment to fetch.
     */
    where: InvesimentWhereUniqueInput
  }

  /**
   * Invesiment findUniqueOrThrow
   */
  export type InvesimentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invesiment
     */
    select?: InvesimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invesiment
     */
    omit?: InvesimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvesimentInclude<ExtArgs> | null
    /**
     * Filter, which Invesiment to fetch.
     */
    where: InvesimentWhereUniqueInput
  }

  /**
   * Invesiment findFirst
   */
  export type InvesimentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invesiment
     */
    select?: InvesimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invesiment
     */
    omit?: InvesimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvesimentInclude<ExtArgs> | null
    /**
     * Filter, which Invesiment to fetch.
     */
    where?: InvesimentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invesiments to fetch.
     */
    orderBy?: InvesimentOrderByWithRelationInput | InvesimentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invesiments.
     */
    cursor?: InvesimentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invesiments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invesiments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invesiments.
     */
    distinct?: InvesimentScalarFieldEnum | InvesimentScalarFieldEnum[]
  }

  /**
   * Invesiment findFirstOrThrow
   */
  export type InvesimentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invesiment
     */
    select?: InvesimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invesiment
     */
    omit?: InvesimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvesimentInclude<ExtArgs> | null
    /**
     * Filter, which Invesiment to fetch.
     */
    where?: InvesimentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invesiments to fetch.
     */
    orderBy?: InvesimentOrderByWithRelationInput | InvesimentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invesiments.
     */
    cursor?: InvesimentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invesiments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invesiments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invesiments.
     */
    distinct?: InvesimentScalarFieldEnum | InvesimentScalarFieldEnum[]
  }

  /**
   * Invesiment findMany
   */
  export type InvesimentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invesiment
     */
    select?: InvesimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invesiment
     */
    omit?: InvesimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvesimentInclude<ExtArgs> | null
    /**
     * Filter, which Invesiments to fetch.
     */
    where?: InvesimentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invesiments to fetch.
     */
    orderBy?: InvesimentOrderByWithRelationInput | InvesimentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invesiments.
     */
    cursor?: InvesimentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invesiments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invesiments.
     */
    skip?: number
    distinct?: InvesimentScalarFieldEnum | InvesimentScalarFieldEnum[]
  }

  /**
   * Invesiment create
   */
  export type InvesimentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invesiment
     */
    select?: InvesimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invesiment
     */
    omit?: InvesimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvesimentInclude<ExtArgs> | null
    /**
     * The data needed to create a Invesiment.
     */
    data: XOR<InvesimentCreateInput, InvesimentUncheckedCreateInput>
  }

  /**
   * Invesiment createMany
   */
  export type InvesimentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invesiments.
     */
    data: InvesimentCreateManyInput | InvesimentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invesiment createManyAndReturn
   */
  export type InvesimentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invesiment
     */
    select?: InvesimentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invesiment
     */
    omit?: InvesimentOmit<ExtArgs> | null
    /**
     * The data used to create many Invesiments.
     */
    data: InvesimentCreateManyInput | InvesimentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvesimentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invesiment update
   */
  export type InvesimentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invesiment
     */
    select?: InvesimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invesiment
     */
    omit?: InvesimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvesimentInclude<ExtArgs> | null
    /**
     * The data needed to update a Invesiment.
     */
    data: XOR<InvesimentUpdateInput, InvesimentUncheckedUpdateInput>
    /**
     * Choose, which Invesiment to update.
     */
    where: InvesimentWhereUniqueInput
  }

  /**
   * Invesiment updateMany
   */
  export type InvesimentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invesiments.
     */
    data: XOR<InvesimentUpdateManyMutationInput, InvesimentUncheckedUpdateManyInput>
    /**
     * Filter which Invesiments to update
     */
    where?: InvesimentWhereInput
    /**
     * Limit how many Invesiments to update.
     */
    limit?: number
  }

  /**
   * Invesiment updateManyAndReturn
   */
  export type InvesimentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invesiment
     */
    select?: InvesimentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invesiment
     */
    omit?: InvesimentOmit<ExtArgs> | null
    /**
     * The data used to update Invesiments.
     */
    data: XOR<InvesimentUpdateManyMutationInput, InvesimentUncheckedUpdateManyInput>
    /**
     * Filter which Invesiments to update
     */
    where?: InvesimentWhereInput
    /**
     * Limit how many Invesiments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvesimentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invesiment upsert
   */
  export type InvesimentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invesiment
     */
    select?: InvesimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invesiment
     */
    omit?: InvesimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvesimentInclude<ExtArgs> | null
    /**
     * The filter to search for the Invesiment to update in case it exists.
     */
    where: InvesimentWhereUniqueInput
    /**
     * In case the Invesiment found by the `where` argument doesn't exist, create a new Invesiment with this data.
     */
    create: XOR<InvesimentCreateInput, InvesimentUncheckedCreateInput>
    /**
     * In case the Invesiment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvesimentUpdateInput, InvesimentUncheckedUpdateInput>
  }

  /**
   * Invesiment delete
   */
  export type InvesimentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invesiment
     */
    select?: InvesimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invesiment
     */
    omit?: InvesimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvesimentInclude<ExtArgs> | null
    /**
     * Filter which Invesiment to delete.
     */
    where: InvesimentWhereUniqueInput
  }

  /**
   * Invesiment deleteMany
   */
  export type InvesimentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invesiments to delete
     */
    where?: InvesimentWhereInput
    /**
     * Limit how many Invesiments to delete.
     */
    limit?: number
  }

  /**
   * Invesiment.investor
   */
  export type Invesiment$investorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investors
     */
    select?: investorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investors
     */
    omit?: investorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investorsInclude<ExtArgs> | null
    where?: investorsWhereInput
  }

  /**
   * Invesiment without action
   */
  export type InvesimentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invesiment
     */
    select?: InvesimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invesiment
     */
    omit?: InvesimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvesimentInclude<ExtArgs> | null
  }


  /**
   * Model projectProposal
   */

  export type AggregateProjectProposal = {
    _count: ProjectProposalCountAggregateOutputType | null
    _min: ProjectProposalMinAggregateOutputType | null
    _max: ProjectProposalMaxAggregateOutputType | null
  }

  export type ProjectProposalMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    landsId: string | null
    statusProjectProposal: $Enums.statusProposal | null
    createdAt: Date | null
    ownerAgreeProjectProposal: $Enums.OwnerAgreeProposal | null
  }

  export type ProjectProposalMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    landsId: string | null
    statusProjectProposal: $Enums.statusProposal | null
    createdAt: Date | null
    ownerAgreeProjectProposal: $Enums.OwnerAgreeProposal | null
  }

  export type ProjectProposalCountAggregateOutputType = {
    id: number
    projectId: number
    landsId: number
    statusProjectProposal: number
    createdAt: number
    ownerAgreeProjectProposal: number
    _all: number
  }


  export type ProjectProposalMinAggregateInputType = {
    id?: true
    projectId?: true
    landsId?: true
    statusProjectProposal?: true
    createdAt?: true
    ownerAgreeProjectProposal?: true
  }

  export type ProjectProposalMaxAggregateInputType = {
    id?: true
    projectId?: true
    landsId?: true
    statusProjectProposal?: true
    createdAt?: true
    ownerAgreeProjectProposal?: true
  }

  export type ProjectProposalCountAggregateInputType = {
    id?: true
    projectId?: true
    landsId?: true
    statusProjectProposal?: true
    createdAt?: true
    ownerAgreeProjectProposal?: true
    _all?: true
  }

  export type ProjectProposalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projectProposal to aggregate.
     */
    where?: projectProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectProposals to fetch.
     */
    orderBy?: projectProposalOrderByWithRelationInput | projectProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectProposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projectProposals
    **/
    _count?: true | ProjectProposalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectProposalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectProposalMaxAggregateInputType
  }

  export type GetProjectProposalAggregateType<T extends ProjectProposalAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectProposal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectProposal[P]>
      : GetScalarType<T[P], AggregateProjectProposal[P]>
  }




  export type projectProposalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectProposalWhereInput
    orderBy?: projectProposalOrderByWithAggregationInput | projectProposalOrderByWithAggregationInput[]
    by: ProjectProposalScalarFieldEnum[] | ProjectProposalScalarFieldEnum
    having?: projectProposalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectProposalCountAggregateInputType | true
    _min?: ProjectProposalMinAggregateInputType
    _max?: ProjectProposalMaxAggregateInputType
  }

  export type ProjectProposalGroupByOutputType = {
    id: string
    projectId: string
    landsId: string
    statusProjectProposal: $Enums.statusProposal
    createdAt: Date
    ownerAgreeProjectProposal: $Enums.OwnerAgreeProposal
    _count: ProjectProposalCountAggregateOutputType | null
    _min: ProjectProposalMinAggregateOutputType | null
    _max: ProjectProposalMaxAggregateOutputType | null
  }

  type GetProjectProposalGroupByPayload<T extends projectProposalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectProposalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectProposalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectProposalGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectProposalGroupByOutputType[P]>
        }
      >
    >


  export type projectProposalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    landsId?: boolean
    statusProjectProposal?: boolean
    createdAt?: boolean
    ownerAgreeProjectProposal?: boolean
    projects?: boolean | ProjectDefaultArgs<ExtArgs>
    lands?: boolean | LandsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectProposal"]>

  export type projectProposalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    landsId?: boolean
    statusProjectProposal?: boolean
    createdAt?: boolean
    ownerAgreeProjectProposal?: boolean
    projects?: boolean | ProjectDefaultArgs<ExtArgs>
    lands?: boolean | LandsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectProposal"]>

  export type projectProposalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    landsId?: boolean
    statusProjectProposal?: boolean
    createdAt?: boolean
    ownerAgreeProjectProposal?: boolean
    projects?: boolean | ProjectDefaultArgs<ExtArgs>
    lands?: boolean | LandsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectProposal"]>

  export type projectProposalSelectScalar = {
    id?: boolean
    projectId?: boolean
    landsId?: boolean
    statusProjectProposal?: boolean
    createdAt?: boolean
    ownerAgreeProjectProposal?: boolean
  }

  export type projectProposalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "landsId" | "statusProjectProposal" | "createdAt" | "ownerAgreeProjectProposal", ExtArgs["result"]["projectProposal"]>
  export type projectProposalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | ProjectDefaultArgs<ExtArgs>
    lands?: boolean | LandsDefaultArgs<ExtArgs>
  }
  export type projectProposalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | ProjectDefaultArgs<ExtArgs>
    lands?: boolean | LandsDefaultArgs<ExtArgs>
  }
  export type projectProposalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | ProjectDefaultArgs<ExtArgs>
    lands?: boolean | LandsDefaultArgs<ExtArgs>
  }

  export type $projectProposalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "projectProposal"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>
      lands: Prisma.$LandsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      landsId: string
      statusProjectProposal: $Enums.statusProposal
      createdAt: Date
      ownerAgreeProjectProposal: $Enums.OwnerAgreeProposal
    }, ExtArgs["result"]["projectProposal"]>
    composites: {}
  }

  type projectProposalGetPayload<S extends boolean | null | undefined | projectProposalDefaultArgs> = $Result.GetResult<Prisma.$projectProposalPayload, S>

  type projectProposalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectProposalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectProposalCountAggregateInputType | true
    }

  export interface projectProposalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['projectProposal'], meta: { name: 'projectProposal' } }
    /**
     * Find zero or one ProjectProposal that matches the filter.
     * @param {projectProposalFindUniqueArgs} args - Arguments to find a ProjectProposal
     * @example
     * // Get one ProjectProposal
     * const projectProposal = await prisma.projectProposal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectProposalFindUniqueArgs>(args: SelectSubset<T, projectProposalFindUniqueArgs<ExtArgs>>): Prisma__projectProposalClient<$Result.GetResult<Prisma.$projectProposalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectProposal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectProposalFindUniqueOrThrowArgs} args - Arguments to find a ProjectProposal
     * @example
     * // Get one ProjectProposal
     * const projectProposal = await prisma.projectProposal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectProposalFindUniqueOrThrowArgs>(args: SelectSubset<T, projectProposalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectProposalClient<$Result.GetResult<Prisma.$projectProposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectProposal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectProposalFindFirstArgs} args - Arguments to find a ProjectProposal
     * @example
     * // Get one ProjectProposal
     * const projectProposal = await prisma.projectProposal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectProposalFindFirstArgs>(args?: SelectSubset<T, projectProposalFindFirstArgs<ExtArgs>>): Prisma__projectProposalClient<$Result.GetResult<Prisma.$projectProposalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectProposal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectProposalFindFirstOrThrowArgs} args - Arguments to find a ProjectProposal
     * @example
     * // Get one ProjectProposal
     * const projectProposal = await prisma.projectProposal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectProposalFindFirstOrThrowArgs>(args?: SelectSubset<T, projectProposalFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectProposalClient<$Result.GetResult<Prisma.$projectProposalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectProposals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectProposalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectProposals
     * const projectProposals = await prisma.projectProposal.findMany()
     * 
     * // Get first 10 ProjectProposals
     * const projectProposals = await prisma.projectProposal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectProposalWithIdOnly = await prisma.projectProposal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends projectProposalFindManyArgs>(args?: SelectSubset<T, projectProposalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectProposal.
     * @param {projectProposalCreateArgs} args - Arguments to create a ProjectProposal.
     * @example
     * // Create one ProjectProposal
     * const ProjectProposal = await prisma.projectProposal.create({
     *   data: {
     *     // ... data to create a ProjectProposal
     *   }
     * })
     * 
     */
    create<T extends projectProposalCreateArgs>(args: SelectSubset<T, projectProposalCreateArgs<ExtArgs>>): Prisma__projectProposalClient<$Result.GetResult<Prisma.$projectProposalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectProposals.
     * @param {projectProposalCreateManyArgs} args - Arguments to create many ProjectProposals.
     * @example
     * // Create many ProjectProposals
     * const projectProposal = await prisma.projectProposal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectProposalCreateManyArgs>(args?: SelectSubset<T, projectProposalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectProposals and returns the data saved in the database.
     * @param {projectProposalCreateManyAndReturnArgs} args - Arguments to create many ProjectProposals.
     * @example
     * // Create many ProjectProposals
     * const projectProposal = await prisma.projectProposal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectProposals and only return the `id`
     * const projectProposalWithIdOnly = await prisma.projectProposal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends projectProposalCreateManyAndReturnArgs>(args?: SelectSubset<T, projectProposalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectProposalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectProposal.
     * @param {projectProposalDeleteArgs} args - Arguments to delete one ProjectProposal.
     * @example
     * // Delete one ProjectProposal
     * const ProjectProposal = await prisma.projectProposal.delete({
     *   where: {
     *     // ... filter to delete one ProjectProposal
     *   }
     * })
     * 
     */
    delete<T extends projectProposalDeleteArgs>(args: SelectSubset<T, projectProposalDeleteArgs<ExtArgs>>): Prisma__projectProposalClient<$Result.GetResult<Prisma.$projectProposalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectProposal.
     * @param {projectProposalUpdateArgs} args - Arguments to update one ProjectProposal.
     * @example
     * // Update one ProjectProposal
     * const projectProposal = await prisma.projectProposal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectProposalUpdateArgs>(args: SelectSubset<T, projectProposalUpdateArgs<ExtArgs>>): Prisma__projectProposalClient<$Result.GetResult<Prisma.$projectProposalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectProposals.
     * @param {projectProposalDeleteManyArgs} args - Arguments to filter ProjectProposals to delete.
     * @example
     * // Delete a few ProjectProposals
     * const { count } = await prisma.projectProposal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectProposalDeleteManyArgs>(args?: SelectSubset<T, projectProposalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectProposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectProposalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectProposals
     * const projectProposal = await prisma.projectProposal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectProposalUpdateManyArgs>(args: SelectSubset<T, projectProposalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectProposals and returns the data updated in the database.
     * @param {projectProposalUpdateManyAndReturnArgs} args - Arguments to update many ProjectProposals.
     * @example
     * // Update many ProjectProposals
     * const projectProposal = await prisma.projectProposal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectProposals and only return the `id`
     * const projectProposalWithIdOnly = await prisma.projectProposal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends projectProposalUpdateManyAndReturnArgs>(args: SelectSubset<T, projectProposalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectProposalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectProposal.
     * @param {projectProposalUpsertArgs} args - Arguments to update or create a ProjectProposal.
     * @example
     * // Update or create a ProjectProposal
     * const projectProposal = await prisma.projectProposal.upsert({
     *   create: {
     *     // ... data to create a ProjectProposal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectProposal we want to update
     *   }
     * })
     */
    upsert<T extends projectProposalUpsertArgs>(args: SelectSubset<T, projectProposalUpsertArgs<ExtArgs>>): Prisma__projectProposalClient<$Result.GetResult<Prisma.$projectProposalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectProposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectProposalCountArgs} args - Arguments to filter ProjectProposals to count.
     * @example
     * // Count the number of ProjectProposals
     * const count = await prisma.projectProposal.count({
     *   where: {
     *     // ... the filter for the ProjectProposals we want to count
     *   }
     * })
    **/
    count<T extends projectProposalCountArgs>(
      args?: Subset<T, projectProposalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectProposalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectProposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectProposalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectProposalAggregateArgs>(args: Subset<T, ProjectProposalAggregateArgs>): Prisma.PrismaPromise<GetProjectProposalAggregateType<T>>

    /**
     * Group by ProjectProposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectProposalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends projectProposalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectProposalGroupByArgs['orderBy'] }
        : { orderBy?: projectProposalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projectProposalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectProposalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the projectProposal model
   */
  readonly fields: projectProposalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for projectProposal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectProposalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lands<T extends LandsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LandsDefaultArgs<ExtArgs>>): Prisma__LandsClient<$Result.GetResult<Prisma.$LandsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the projectProposal model
   */
  interface projectProposalFieldRefs {
    readonly id: FieldRef<"projectProposal", 'String'>
    readonly projectId: FieldRef<"projectProposal", 'String'>
    readonly landsId: FieldRef<"projectProposal", 'String'>
    readonly statusProjectProposal: FieldRef<"projectProposal", 'statusProposal'>
    readonly createdAt: FieldRef<"projectProposal", 'DateTime'>
    readonly ownerAgreeProjectProposal: FieldRef<"projectProposal", 'OwnerAgreeProposal'>
  }
    

  // Custom InputTypes
  /**
   * projectProposal findUnique
   */
  export type projectProposalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectProposal
     */
    select?: projectProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectProposal
     */
    omit?: projectProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectProposalInclude<ExtArgs> | null
    /**
     * Filter, which projectProposal to fetch.
     */
    where: projectProposalWhereUniqueInput
  }

  /**
   * projectProposal findUniqueOrThrow
   */
  export type projectProposalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectProposal
     */
    select?: projectProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectProposal
     */
    omit?: projectProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectProposalInclude<ExtArgs> | null
    /**
     * Filter, which projectProposal to fetch.
     */
    where: projectProposalWhereUniqueInput
  }

  /**
   * projectProposal findFirst
   */
  export type projectProposalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectProposal
     */
    select?: projectProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectProposal
     */
    omit?: projectProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectProposalInclude<ExtArgs> | null
    /**
     * Filter, which projectProposal to fetch.
     */
    where?: projectProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectProposals to fetch.
     */
    orderBy?: projectProposalOrderByWithRelationInput | projectProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projectProposals.
     */
    cursor?: projectProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectProposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projectProposals.
     */
    distinct?: ProjectProposalScalarFieldEnum | ProjectProposalScalarFieldEnum[]
  }

  /**
   * projectProposal findFirstOrThrow
   */
  export type projectProposalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectProposal
     */
    select?: projectProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectProposal
     */
    omit?: projectProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectProposalInclude<ExtArgs> | null
    /**
     * Filter, which projectProposal to fetch.
     */
    where?: projectProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectProposals to fetch.
     */
    orderBy?: projectProposalOrderByWithRelationInput | projectProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projectProposals.
     */
    cursor?: projectProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectProposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projectProposals.
     */
    distinct?: ProjectProposalScalarFieldEnum | ProjectProposalScalarFieldEnum[]
  }

  /**
   * projectProposal findMany
   */
  export type projectProposalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectProposal
     */
    select?: projectProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectProposal
     */
    omit?: projectProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectProposalInclude<ExtArgs> | null
    /**
     * Filter, which projectProposals to fetch.
     */
    where?: projectProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectProposals to fetch.
     */
    orderBy?: projectProposalOrderByWithRelationInput | projectProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projectProposals.
     */
    cursor?: projectProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectProposals.
     */
    skip?: number
    distinct?: ProjectProposalScalarFieldEnum | ProjectProposalScalarFieldEnum[]
  }

  /**
   * projectProposal create
   */
  export type projectProposalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectProposal
     */
    select?: projectProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectProposal
     */
    omit?: projectProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectProposalInclude<ExtArgs> | null
    /**
     * The data needed to create a projectProposal.
     */
    data: XOR<projectProposalCreateInput, projectProposalUncheckedCreateInput>
  }

  /**
   * projectProposal createMany
   */
  export type projectProposalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projectProposals.
     */
    data: projectProposalCreateManyInput | projectProposalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projectProposal createManyAndReturn
   */
  export type projectProposalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectProposal
     */
    select?: projectProposalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projectProposal
     */
    omit?: projectProposalOmit<ExtArgs> | null
    /**
     * The data used to create many projectProposals.
     */
    data: projectProposalCreateManyInput | projectProposalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectProposalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * projectProposal update
   */
  export type projectProposalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectProposal
     */
    select?: projectProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectProposal
     */
    omit?: projectProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectProposalInclude<ExtArgs> | null
    /**
     * The data needed to update a projectProposal.
     */
    data: XOR<projectProposalUpdateInput, projectProposalUncheckedUpdateInput>
    /**
     * Choose, which projectProposal to update.
     */
    where: projectProposalWhereUniqueInput
  }

  /**
   * projectProposal updateMany
   */
  export type projectProposalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projectProposals.
     */
    data: XOR<projectProposalUpdateManyMutationInput, projectProposalUncheckedUpdateManyInput>
    /**
     * Filter which projectProposals to update
     */
    where?: projectProposalWhereInput
    /**
     * Limit how many projectProposals to update.
     */
    limit?: number
  }

  /**
   * projectProposal updateManyAndReturn
   */
  export type projectProposalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectProposal
     */
    select?: projectProposalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projectProposal
     */
    omit?: projectProposalOmit<ExtArgs> | null
    /**
     * The data used to update projectProposals.
     */
    data: XOR<projectProposalUpdateManyMutationInput, projectProposalUncheckedUpdateManyInput>
    /**
     * Filter which projectProposals to update
     */
    where?: projectProposalWhereInput
    /**
     * Limit how many projectProposals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectProposalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * projectProposal upsert
   */
  export type projectProposalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectProposal
     */
    select?: projectProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectProposal
     */
    omit?: projectProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectProposalInclude<ExtArgs> | null
    /**
     * The filter to search for the projectProposal to update in case it exists.
     */
    where: projectProposalWhereUniqueInput
    /**
     * In case the projectProposal found by the `where` argument doesn't exist, create a new projectProposal with this data.
     */
    create: XOR<projectProposalCreateInput, projectProposalUncheckedCreateInput>
    /**
     * In case the projectProposal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectProposalUpdateInput, projectProposalUncheckedUpdateInput>
  }

  /**
   * projectProposal delete
   */
  export type projectProposalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectProposal
     */
    select?: projectProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectProposal
     */
    omit?: projectProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectProposalInclude<ExtArgs> | null
    /**
     * Filter which projectProposal to delete.
     */
    where: projectProposalWhereUniqueInput
  }

  /**
   * projectProposal deleteMany
   */
  export type projectProposalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projectProposals to delete
     */
    where?: projectProposalWhereInput
    /**
     * Limit how many projectProposals to delete.
     */
    limit?: number
  }

  /**
   * projectProposal without action
   */
  export type projectProposalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectProposal
     */
    select?: projectProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectProposal
     */
    omit?: projectProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectProposalInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    user_type: 'user_type',
    phone: 'phone',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const LandsScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    area: 'area',
    avaliability: 'avaliability',
    street: 'street',
    number: 'number',
    complement: 'complement',
    district: 'district',
    city: 'city',
    state: 'state',
    postalCode: 'postalCode',
    country: 'country'
  };

  export type LandsScalarFieldEnum = (typeof LandsScalarFieldEnum)[keyof typeof LandsScalarFieldEnum]


  export const LandownersScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    document_id: 'document_id'
  };

  export type LandownersScalarFieldEnum = (typeof LandownersScalarFieldEnum)[keyof typeof LandownersScalarFieldEnum]


  export const CompaniesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    document_id: 'document_id',
    company_name: 'company_name'
  };

  export type CompaniesScalarFieldEnum = (typeof CompaniesScalarFieldEnum)[keyof typeof CompaniesScalarFieldEnum]


  export const InvestorsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    document_id: 'document_id'
  };

  export type InvestorsScalarFieldEnum = (typeof InvestorsScalarFieldEnum)[keyof typeof InvestorsScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    companiesId: 'companiesId',
    powerKw: 'powerKw',
    cost: 'cost',
    status: 'status',
    estimatedReturn: 'estimatedReturn',
    createdAt: 'createdAt',
    title: 'title',
    description: 'description',
    area: 'area'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const InvesimentScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    investorId: 'investorId',
    valueInvested: 'valueInvested',
    investedDate: 'investedDate',
    ownerAgree: 'ownerAgree',
    compAgree: 'compAgree',
    title: 'title',
    description: 'description',
    status: 'status'
  };

  export type InvesimentScalarFieldEnum = (typeof InvesimentScalarFieldEnum)[keyof typeof InvesimentScalarFieldEnum]


  export const ProjectProposalScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    landsId: 'landsId',
    statusProjectProposal: 'statusProjectProposal',
    createdAt: 'createdAt',
    ownerAgreeProjectProposal: 'ownerAgreeProjectProposal'
  };

  export type ProjectProposalScalarFieldEnum = (typeof ProjectProposalScalarFieldEnum)[keyof typeof ProjectProposalScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'StatusApproval'
   */
  export type EnumStatusApprovalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusApproval'>
    


  /**
   * Reference to a field of type 'StatusApproval[]'
   */
  export type ListEnumStatusApprovalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusApproval[]'>
    


  /**
   * Reference to a field of type 'OwnerAgree'
   */
  export type EnumOwnerAgreeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OwnerAgree'>
    


  /**
   * Reference to a field of type 'OwnerAgree[]'
   */
  export type ListEnumOwnerAgreeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OwnerAgree[]'>
    


  /**
   * Reference to a field of type 'CompanyAgree'
   */
  export type EnumCompanyAgreeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompanyAgree'>
    


  /**
   * Reference to a field of type 'CompanyAgree[]'
   */
  export type ListEnumCompanyAgreeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompanyAgree[]'>
    


  /**
   * Reference to a field of type 'StatusInvesiment'
   */
  export type EnumStatusInvesimentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusInvesiment'>
    


  /**
   * Reference to a field of type 'StatusInvesiment[]'
   */
  export type ListEnumStatusInvesimentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusInvesiment[]'>
    


  /**
   * Reference to a field of type 'statusProposal'
   */
  export type EnumstatusProposalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'statusProposal'>
    


  /**
   * Reference to a field of type 'statusProposal[]'
   */
  export type ListEnumstatusProposalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'statusProposal[]'>
    


  /**
   * Reference to a field of type 'OwnerAgreeProposal'
   */
  export type EnumOwnerAgreeProposalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OwnerAgreeProposal'>
    


  /**
   * Reference to a field of type 'OwnerAgreeProposal[]'
   */
  export type ListEnumOwnerAgreeProposalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OwnerAgreeProposal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    user_type?: EnumUserTypeFilter<"Users"> | $Enums.UserType
    phone?: StringNullableFilter<"Users"> | string | null
    created_at?: DateTimeFilter<"Users"> | Date | string
    landOwner?: XOR<LandownersNullableScalarRelationFilter, landownersWhereInput> | null
    company?: XOR<CompaniesNullableScalarRelationFilter, companiesWhereInput> | null
    investor?: XOR<InvestorsNullableScalarRelationFilter, investorsWhereInput> | null
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    phone?: SortOrderInput | SortOrder
    created_at?: SortOrder
    landOwner?: landownersOrderByWithRelationInput
    company?: companiesOrderByWithRelationInput
    investor?: investorsOrderByWithRelationInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    user_type?: EnumUserTypeFilter<"Users"> | $Enums.UserType
    phone?: StringNullableFilter<"Users"> | string | null
    created_at?: DateTimeFilter<"Users"> | Date | string
    landOwner?: XOR<LandownersNullableScalarRelationFilter, landownersWhereInput> | null
    company?: XOR<CompaniesNullableScalarRelationFilter, companiesWhereInput> | null
    investor?: XOR<InvestorsNullableScalarRelationFilter, investorsWhereInput> | null
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    phone?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    user_type?: EnumUserTypeWithAggregatesFilter<"Users"> | $Enums.UserType
    phone?: StringNullableWithAggregatesFilter<"Users"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type LandsWhereInput = {
    AND?: LandsWhereInput | LandsWhereInput[]
    OR?: LandsWhereInput[]
    NOT?: LandsWhereInput | LandsWhereInput[]
    id?: StringFilter<"Lands"> | string
    ownerId?: StringFilter<"Lands"> | string
    area?: FloatFilter<"Lands"> | number
    avaliability?: BoolFilter<"Lands"> | boolean
    street?: StringFilter<"Lands"> | string
    number?: StringFilter<"Lands"> | string
    complement?: StringFilter<"Lands"> | string
    district?: StringFilter<"Lands"> | string
    city?: StringFilter<"Lands"> | string
    state?: StringFilter<"Lands"> | string
    postalCode?: StringFilter<"Lands"> | string
    country?: StringFilter<"Lands"> | string
    owner?: XOR<LandownersScalarRelationFilter, landownersWhereInput>
    projects?: ProjectListRelationFilter
    projectsProposal?: ProjectProposalListRelationFilter
  }

  export type LandsOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    area?: SortOrder
    avaliability?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    district?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    owner?: landownersOrderByWithRelationInput
    projects?: ProjectOrderByRelationAggregateInput
    projectsProposal?: projectProposalOrderByRelationAggregateInput
  }

  export type LandsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ownerId?: string
    AND?: LandsWhereInput | LandsWhereInput[]
    OR?: LandsWhereInput[]
    NOT?: LandsWhereInput | LandsWhereInput[]
    area?: FloatFilter<"Lands"> | number
    avaliability?: BoolFilter<"Lands"> | boolean
    street?: StringFilter<"Lands"> | string
    number?: StringFilter<"Lands"> | string
    complement?: StringFilter<"Lands"> | string
    district?: StringFilter<"Lands"> | string
    city?: StringFilter<"Lands"> | string
    state?: StringFilter<"Lands"> | string
    postalCode?: StringFilter<"Lands"> | string
    country?: StringFilter<"Lands"> | string
    owner?: XOR<LandownersScalarRelationFilter, landownersWhereInput>
    projects?: ProjectListRelationFilter
    projectsProposal?: ProjectProposalListRelationFilter
  }, "id" | "ownerId">

  export type LandsOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    area?: SortOrder
    avaliability?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    district?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    _count?: LandsCountOrderByAggregateInput
    _avg?: LandsAvgOrderByAggregateInput
    _max?: LandsMaxOrderByAggregateInput
    _min?: LandsMinOrderByAggregateInput
    _sum?: LandsSumOrderByAggregateInput
  }

  export type LandsScalarWhereWithAggregatesInput = {
    AND?: LandsScalarWhereWithAggregatesInput | LandsScalarWhereWithAggregatesInput[]
    OR?: LandsScalarWhereWithAggregatesInput[]
    NOT?: LandsScalarWhereWithAggregatesInput | LandsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lands"> | string
    ownerId?: StringWithAggregatesFilter<"Lands"> | string
    area?: FloatWithAggregatesFilter<"Lands"> | number
    avaliability?: BoolWithAggregatesFilter<"Lands"> | boolean
    street?: StringWithAggregatesFilter<"Lands"> | string
    number?: StringWithAggregatesFilter<"Lands"> | string
    complement?: StringWithAggregatesFilter<"Lands"> | string
    district?: StringWithAggregatesFilter<"Lands"> | string
    city?: StringWithAggregatesFilter<"Lands"> | string
    state?: StringWithAggregatesFilter<"Lands"> | string
    postalCode?: StringWithAggregatesFilter<"Lands"> | string
    country?: StringWithAggregatesFilter<"Lands"> | string
  }

  export type landownersWhereInput = {
    AND?: landownersWhereInput | landownersWhereInput[]
    OR?: landownersWhereInput[]
    NOT?: landownersWhereInput | landownersWhereInput[]
    id?: StringFilter<"landowners"> | string
    userId?: StringFilter<"landowners"> | string
    document_id?: StringFilter<"landowners"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    lands?: LandsListRelationFilter
  }

  export type landownersOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    document_id?: SortOrder
    user?: UsersOrderByWithRelationInput
    lands?: LandsOrderByRelationAggregateInput
  }

  export type landownersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: landownersWhereInput | landownersWhereInput[]
    OR?: landownersWhereInput[]
    NOT?: landownersWhereInput | landownersWhereInput[]
    document_id?: StringFilter<"landowners"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    lands?: LandsListRelationFilter
  }, "id" | "userId">

  export type landownersOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    document_id?: SortOrder
    _count?: landownersCountOrderByAggregateInput
    _max?: landownersMaxOrderByAggregateInput
    _min?: landownersMinOrderByAggregateInput
  }

  export type landownersScalarWhereWithAggregatesInput = {
    AND?: landownersScalarWhereWithAggregatesInput | landownersScalarWhereWithAggregatesInput[]
    OR?: landownersScalarWhereWithAggregatesInput[]
    NOT?: landownersScalarWhereWithAggregatesInput | landownersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"landowners"> | string
    userId?: StringWithAggregatesFilter<"landowners"> | string
    document_id?: StringWithAggregatesFilter<"landowners"> | string
  }

  export type companiesWhereInput = {
    AND?: companiesWhereInput | companiesWhereInput[]
    OR?: companiesWhereInput[]
    NOT?: companiesWhereInput | companiesWhereInput[]
    id?: StringFilter<"companies"> | string
    userId?: StringFilter<"companies"> | string
    document_id?: StringFilter<"companies"> | string
    company_name?: StringFilter<"companies"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    projects?: ProjectListRelationFilter
  }

  export type companiesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    document_id?: SortOrder
    company_name?: SortOrder
    user?: UsersOrderByWithRelationInput
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type companiesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    document_id?: string
    AND?: companiesWhereInput | companiesWhereInput[]
    OR?: companiesWhereInput[]
    NOT?: companiesWhereInput | companiesWhereInput[]
    company_name?: StringFilter<"companies"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    projects?: ProjectListRelationFilter
  }, "id" | "userId" | "document_id">

  export type companiesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    document_id?: SortOrder
    company_name?: SortOrder
    _count?: companiesCountOrderByAggregateInput
    _max?: companiesMaxOrderByAggregateInput
    _min?: companiesMinOrderByAggregateInput
  }

  export type companiesScalarWhereWithAggregatesInput = {
    AND?: companiesScalarWhereWithAggregatesInput | companiesScalarWhereWithAggregatesInput[]
    OR?: companiesScalarWhereWithAggregatesInput[]
    NOT?: companiesScalarWhereWithAggregatesInput | companiesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"companies"> | string
    userId?: StringWithAggregatesFilter<"companies"> | string
    document_id?: StringWithAggregatesFilter<"companies"> | string
    company_name?: StringWithAggregatesFilter<"companies"> | string
  }

  export type investorsWhereInput = {
    AND?: investorsWhereInput | investorsWhereInput[]
    OR?: investorsWhereInput[]
    NOT?: investorsWhereInput | investorsWhereInput[]
    id?: StringFilter<"investors"> | string
    userId?: StringFilter<"investors"> | string
    document_id?: StringFilter<"investors"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    invesiments?: InvesimentListRelationFilter
  }

  export type investorsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    document_id?: SortOrder
    user?: UsersOrderByWithRelationInput
    invesiments?: InvesimentOrderByRelationAggregateInput
  }

  export type investorsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: investorsWhereInput | investorsWhereInput[]
    OR?: investorsWhereInput[]
    NOT?: investorsWhereInput | investorsWhereInput[]
    document_id?: StringFilter<"investors"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    invesiments?: InvesimentListRelationFilter
  }, "id" | "userId">

  export type investorsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    document_id?: SortOrder
    _count?: investorsCountOrderByAggregateInput
    _max?: investorsMaxOrderByAggregateInput
    _min?: investorsMinOrderByAggregateInput
  }

  export type investorsScalarWhereWithAggregatesInput = {
    AND?: investorsScalarWhereWithAggregatesInput | investorsScalarWhereWithAggregatesInput[]
    OR?: investorsScalarWhereWithAggregatesInput[]
    NOT?: investorsScalarWhereWithAggregatesInput | investorsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"investors"> | string
    userId?: StringWithAggregatesFilter<"investors"> | string
    document_id?: StringWithAggregatesFilter<"investors"> | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    projectId?: StringFilter<"Project"> | string
    companiesId?: StringNullableFilter<"Project"> | string | null
    powerKw?: FloatFilter<"Project"> | number
    cost?: FloatFilter<"Project"> | number
    status?: EnumStatusApprovalFilter<"Project"> | $Enums.StatusApproval
    estimatedReturn?: FloatFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    area?: FloatFilter<"Project"> | number
    landProject?: XOR<LandsScalarRelationFilter, LandsWhereInput>
    company?: XOR<CompaniesNullableScalarRelationFilter, companiesWhereInput> | null
    investments?: InvesimentListRelationFilter
    projectsProposal?: ProjectProposalListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    companiesId?: SortOrderInput | SortOrder
    powerKw?: SortOrder
    cost?: SortOrder
    status?: SortOrder
    estimatedReturn?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    area?: SortOrder
    landProject?: LandsOrderByWithRelationInput
    company?: companiesOrderByWithRelationInput
    investments?: InvesimentOrderByRelationAggregateInput
    projectsProposal?: projectProposalOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId?: string
    companiesId?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    powerKw?: FloatFilter<"Project"> | number
    cost?: FloatFilter<"Project"> | number
    status?: EnumStatusApprovalFilter<"Project"> | $Enums.StatusApproval
    estimatedReturn?: FloatFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    area?: FloatFilter<"Project"> | number
    landProject?: XOR<LandsScalarRelationFilter, LandsWhereInput>
    company?: XOR<CompaniesNullableScalarRelationFilter, companiesWhereInput> | null
    investments?: InvesimentListRelationFilter
    projectsProposal?: ProjectProposalListRelationFilter
  }, "id" | "projectId" | "companiesId">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    companiesId?: SortOrderInput | SortOrder
    powerKw?: SortOrder
    cost?: SortOrder
    status?: SortOrder
    estimatedReturn?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    area?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    projectId?: StringWithAggregatesFilter<"Project"> | string
    companiesId?: StringNullableWithAggregatesFilter<"Project"> | string | null
    powerKw?: FloatWithAggregatesFilter<"Project"> | number
    cost?: FloatWithAggregatesFilter<"Project"> | number
    status?: EnumStatusApprovalWithAggregatesFilter<"Project"> | $Enums.StatusApproval
    estimatedReturn?: FloatWithAggregatesFilter<"Project"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    title?: StringWithAggregatesFilter<"Project"> | string
    description?: StringWithAggregatesFilter<"Project"> | string
    area?: FloatWithAggregatesFilter<"Project"> | number
  }

  export type InvesimentWhereInput = {
    AND?: InvesimentWhereInput | InvesimentWhereInput[]
    OR?: InvesimentWhereInput[]
    NOT?: InvesimentWhereInput | InvesimentWhereInput[]
    id?: StringFilter<"Invesiment"> | string
    projectId?: StringFilter<"Invesiment"> | string
    investorId?: StringFilter<"Invesiment"> | string
    valueInvested?: FloatFilter<"Invesiment"> | number
    investedDate?: DateTimeFilter<"Invesiment"> | Date | string
    ownerAgree?: EnumOwnerAgreeFilter<"Invesiment"> | $Enums.OwnerAgree
    compAgree?: EnumCompanyAgreeFilter<"Invesiment"> | $Enums.CompanyAgree
    title?: StringFilter<"Invesiment"> | string
    description?: StringFilter<"Invesiment"> | string
    status?: EnumStatusInvesimentFilter<"Invesiment"> | $Enums.StatusInvesiment
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    investor?: XOR<InvestorsNullableScalarRelationFilter, investorsWhereInput> | null
  }

  export type InvesimentOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    investorId?: SortOrder
    valueInvested?: SortOrder
    investedDate?: SortOrder
    ownerAgree?: SortOrder
    compAgree?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    project?: ProjectOrderByWithRelationInput
    investor?: investorsOrderByWithRelationInput
  }

  export type InvesimentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId?: string
    investorId?: string
    AND?: InvesimentWhereInput | InvesimentWhereInput[]
    OR?: InvesimentWhereInput[]
    NOT?: InvesimentWhereInput | InvesimentWhereInput[]
    valueInvested?: FloatFilter<"Invesiment"> | number
    investedDate?: DateTimeFilter<"Invesiment"> | Date | string
    ownerAgree?: EnumOwnerAgreeFilter<"Invesiment"> | $Enums.OwnerAgree
    compAgree?: EnumCompanyAgreeFilter<"Invesiment"> | $Enums.CompanyAgree
    title?: StringFilter<"Invesiment"> | string
    description?: StringFilter<"Invesiment"> | string
    status?: EnumStatusInvesimentFilter<"Invesiment"> | $Enums.StatusInvesiment
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    investor?: XOR<InvestorsNullableScalarRelationFilter, investorsWhereInput> | null
  }, "id" | "projectId" | "investorId">

  export type InvesimentOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    investorId?: SortOrder
    valueInvested?: SortOrder
    investedDate?: SortOrder
    ownerAgree?: SortOrder
    compAgree?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    _count?: InvesimentCountOrderByAggregateInput
    _avg?: InvesimentAvgOrderByAggregateInput
    _max?: InvesimentMaxOrderByAggregateInput
    _min?: InvesimentMinOrderByAggregateInput
    _sum?: InvesimentSumOrderByAggregateInput
  }

  export type InvesimentScalarWhereWithAggregatesInput = {
    AND?: InvesimentScalarWhereWithAggregatesInput | InvesimentScalarWhereWithAggregatesInput[]
    OR?: InvesimentScalarWhereWithAggregatesInput[]
    NOT?: InvesimentScalarWhereWithAggregatesInput | InvesimentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invesiment"> | string
    projectId?: StringWithAggregatesFilter<"Invesiment"> | string
    investorId?: StringWithAggregatesFilter<"Invesiment"> | string
    valueInvested?: FloatWithAggregatesFilter<"Invesiment"> | number
    investedDate?: DateTimeWithAggregatesFilter<"Invesiment"> | Date | string
    ownerAgree?: EnumOwnerAgreeWithAggregatesFilter<"Invesiment"> | $Enums.OwnerAgree
    compAgree?: EnumCompanyAgreeWithAggregatesFilter<"Invesiment"> | $Enums.CompanyAgree
    title?: StringWithAggregatesFilter<"Invesiment"> | string
    description?: StringWithAggregatesFilter<"Invesiment"> | string
    status?: EnumStatusInvesimentWithAggregatesFilter<"Invesiment"> | $Enums.StatusInvesiment
  }

  export type projectProposalWhereInput = {
    AND?: projectProposalWhereInput | projectProposalWhereInput[]
    OR?: projectProposalWhereInput[]
    NOT?: projectProposalWhereInput | projectProposalWhereInput[]
    id?: StringFilter<"projectProposal"> | string
    projectId?: StringFilter<"projectProposal"> | string
    landsId?: StringFilter<"projectProposal"> | string
    statusProjectProposal?: EnumstatusProposalFilter<"projectProposal"> | $Enums.statusProposal
    createdAt?: DateTimeFilter<"projectProposal"> | Date | string
    ownerAgreeProjectProposal?: EnumOwnerAgreeProposalFilter<"projectProposal"> | $Enums.OwnerAgreeProposal
    projects?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    lands?: XOR<LandsScalarRelationFilter, LandsWhereInput>
  }

  export type projectProposalOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    landsId?: SortOrder
    statusProjectProposal?: SortOrder
    createdAt?: SortOrder
    ownerAgreeProjectProposal?: SortOrder
    projects?: ProjectOrderByWithRelationInput
    lands?: LandsOrderByWithRelationInput
  }

  export type projectProposalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId?: string
    landsId?: string
    AND?: projectProposalWhereInput | projectProposalWhereInput[]
    OR?: projectProposalWhereInput[]
    NOT?: projectProposalWhereInput | projectProposalWhereInput[]
    statusProjectProposal?: EnumstatusProposalFilter<"projectProposal"> | $Enums.statusProposal
    createdAt?: DateTimeFilter<"projectProposal"> | Date | string
    ownerAgreeProjectProposal?: EnumOwnerAgreeProposalFilter<"projectProposal"> | $Enums.OwnerAgreeProposal
    projects?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    lands?: XOR<LandsScalarRelationFilter, LandsWhereInput>
  }, "id" | "projectId" | "landsId">

  export type projectProposalOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    landsId?: SortOrder
    statusProjectProposal?: SortOrder
    createdAt?: SortOrder
    ownerAgreeProjectProposal?: SortOrder
    _count?: projectProposalCountOrderByAggregateInput
    _max?: projectProposalMaxOrderByAggregateInput
    _min?: projectProposalMinOrderByAggregateInput
  }

  export type projectProposalScalarWhereWithAggregatesInput = {
    AND?: projectProposalScalarWhereWithAggregatesInput | projectProposalScalarWhereWithAggregatesInput[]
    OR?: projectProposalScalarWhereWithAggregatesInput[]
    NOT?: projectProposalScalarWhereWithAggregatesInput | projectProposalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"projectProposal"> | string
    projectId?: StringWithAggregatesFilter<"projectProposal"> | string
    landsId?: StringWithAggregatesFilter<"projectProposal"> | string
    statusProjectProposal?: EnumstatusProposalWithAggregatesFilter<"projectProposal"> | $Enums.statusProposal
    createdAt?: DateTimeWithAggregatesFilter<"projectProposal"> | Date | string
    ownerAgreeProjectProposal?: EnumOwnerAgreeProposalWithAggregatesFilter<"projectProposal"> | $Enums.OwnerAgreeProposal
  }

  export type UsersCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    user_type: $Enums.UserType
    phone?: string | null
    created_at?: Date | string
    landOwner?: landownersCreateNestedOneWithoutUserInput
    company?: companiesCreateNestedOneWithoutUserInput
    investor?: investorsCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    user_type: $Enums.UserType
    phone?: string | null
    created_at?: Date | string
    landOwner?: landownersUncheckedCreateNestedOneWithoutUserInput
    company?: companiesUncheckedCreateNestedOneWithoutUserInput
    investor?: investorsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    landOwner?: landownersUpdateOneWithoutUserNestedInput
    company?: companiesUpdateOneWithoutUserNestedInput
    investor?: investorsUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    landOwner?: landownersUncheckedUpdateOneWithoutUserNestedInput
    company?: companiesUncheckedUpdateOneWithoutUserNestedInput
    investor?: investorsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    user_type: $Enums.UserType
    phone?: string | null
    created_at?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LandsCreateInput = {
    id?: string
    area: number
    avaliability?: boolean
    street: string
    number: string
    complement: string
    district: string
    city: string
    state: string
    postalCode: string
    country: string
    owner: landownersCreateNestedOneWithoutLandsInput
    projects?: ProjectCreateNestedManyWithoutLandProjectInput
    projectsProposal?: projectProposalCreateNestedManyWithoutLandsInput
  }

  export type LandsUncheckedCreateInput = {
    id?: string
    ownerId: string
    area: number
    avaliability?: boolean
    street: string
    number: string
    complement: string
    district: string
    city: string
    state: string
    postalCode: string
    country: string
    projects?: ProjectUncheckedCreateNestedManyWithoutLandProjectInput
    projectsProposal?: projectProposalUncheckedCreateNestedManyWithoutLandsInput
  }

  export type LandsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    avaliability?: BoolFieldUpdateOperationsInput | boolean
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    owner?: landownersUpdateOneRequiredWithoutLandsNestedInput
    projects?: ProjectUpdateManyWithoutLandProjectNestedInput
    projectsProposal?: projectProposalUpdateManyWithoutLandsNestedInput
  }

  export type LandsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    avaliability?: BoolFieldUpdateOperationsInput | boolean
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutLandProjectNestedInput
    projectsProposal?: projectProposalUncheckedUpdateManyWithoutLandsNestedInput
  }

  export type LandsCreateManyInput = {
    id?: string
    ownerId: string
    area: number
    avaliability?: boolean
    street: string
    number: string
    complement: string
    district: string
    city: string
    state: string
    postalCode: string
    country: string
  }

  export type LandsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    avaliability?: BoolFieldUpdateOperationsInput | boolean
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type LandsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    avaliability?: BoolFieldUpdateOperationsInput | boolean
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type landownersCreateInput = {
    id?: string
    document_id: string
    user: UsersCreateNestedOneWithoutLandOwnerInput
    lands?: LandsCreateNestedManyWithoutOwnerInput
  }

  export type landownersUncheckedCreateInput = {
    id?: string
    userId: string
    document_id: string
    lands?: LandsUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type landownersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutLandOwnerNestedInput
    lands?: LandsUpdateManyWithoutOwnerNestedInput
  }

  export type landownersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    lands?: LandsUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type landownersCreateManyInput = {
    id?: string
    userId: string
    document_id: string
  }

  export type landownersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
  }

  export type landownersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
  }

  export type companiesCreateInput = {
    id?: string
    document_id: string
    company_name: string
    user: UsersCreateNestedOneWithoutCompanyInput
    projects?: ProjectCreateNestedManyWithoutCompanyInput
  }

  export type companiesUncheckedCreateInput = {
    id?: string
    userId: string
    document_id: string
    company_name: string
    projects?: ProjectUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companiesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutCompanyNestedInput
    projects?: ProjectUpdateManyWithoutCompanyNestedInput
  }

  export type companiesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type companiesCreateManyInput = {
    id?: string
    userId: string
    document_id: string
    company_name: string
  }

  export type companiesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
  }

  export type companiesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
  }

  export type investorsCreateInput = {
    id?: string
    document_id: string
    user: UsersCreateNestedOneWithoutInvestorInput
    invesiments?: InvesimentCreateNestedManyWithoutInvestorInput
  }

  export type investorsUncheckedCreateInput = {
    id?: string
    userId: string
    document_id: string
    invesiments?: InvesimentUncheckedCreateNestedManyWithoutInvestorInput
  }

  export type investorsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutInvestorNestedInput
    invesiments?: InvesimentUpdateManyWithoutInvestorNestedInput
  }

  export type investorsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    invesiments?: InvesimentUncheckedUpdateManyWithoutInvestorNestedInput
  }

  export type investorsCreateManyInput = {
    id?: string
    userId: string
    document_id: string
  }

  export type investorsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
  }

  export type investorsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateInput = {
    id?: string
    powerKw: number
    cost: number
    status?: $Enums.StatusApproval
    estimatedReturn: number
    createdAt?: Date | string
    title: string
    description: string
    area: number
    landProject: LandsCreateNestedOneWithoutProjectsInput
    company?: companiesCreateNestedOneWithoutProjectsInput
    investments?: InvesimentCreateNestedManyWithoutProjectInput
    projectsProposal?: projectProposalCreateNestedManyWithoutProjectsInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    projectId: string
    companiesId?: string | null
    powerKw: number
    cost: number
    status?: $Enums.StatusApproval
    estimatedReturn: number
    createdAt?: Date | string
    title: string
    description: string
    area: number
    investments?: InvesimentUncheckedCreateNestedManyWithoutProjectInput
    projectsProposal?: projectProposalUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    powerKw?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    estimatedReturn?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    landProject?: LandsUpdateOneRequiredWithoutProjectsNestedInput
    company?: companiesUpdateOneWithoutProjectsNestedInput
    investments?: InvesimentUpdateManyWithoutProjectNestedInput
    projectsProposal?: projectProposalUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    companiesId?: NullableStringFieldUpdateOperationsInput | string | null
    powerKw?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    estimatedReturn?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    investments?: InvesimentUncheckedUpdateManyWithoutProjectNestedInput
    projectsProposal?: projectProposalUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    projectId: string
    companiesId?: string | null
    powerKw: number
    cost: number
    status?: $Enums.StatusApproval
    estimatedReturn: number
    createdAt?: Date | string
    title: string
    description: string
    area: number
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    powerKw?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    estimatedReturn?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    companiesId?: NullableStringFieldUpdateOperationsInput | string | null
    powerKw?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    estimatedReturn?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
  }

  export type InvesimentCreateInput = {
    id?: string
    valueInvested: number
    investedDate?: Date | string
    ownerAgree?: $Enums.OwnerAgree
    compAgree?: $Enums.CompanyAgree
    title: string
    description: string
    status?: $Enums.StatusInvesiment
    project: ProjectCreateNestedOneWithoutInvestmentsInput
    investor?: investorsCreateNestedOneWithoutInvesimentsInput
  }

  export type InvesimentUncheckedCreateInput = {
    id?: string
    projectId: string
    investorId: string
    valueInvested: number
    investedDate?: Date | string
    ownerAgree?: $Enums.OwnerAgree
    compAgree?: $Enums.CompanyAgree
    title: string
    description: string
    status?: $Enums.StatusInvesiment
  }

  export type InvesimentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    valueInvested?: FloatFieldUpdateOperationsInput | number
    investedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerAgree?: EnumOwnerAgreeFieldUpdateOperationsInput | $Enums.OwnerAgree
    compAgree?: EnumCompanyAgreeFieldUpdateOperationsInput | $Enums.CompanyAgree
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusInvesimentFieldUpdateOperationsInput | $Enums.StatusInvesiment
    project?: ProjectUpdateOneRequiredWithoutInvestmentsNestedInput
    investor?: investorsUpdateOneWithoutInvesimentsNestedInput
  }

  export type InvesimentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    investorId?: StringFieldUpdateOperationsInput | string
    valueInvested?: FloatFieldUpdateOperationsInput | number
    investedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerAgree?: EnumOwnerAgreeFieldUpdateOperationsInput | $Enums.OwnerAgree
    compAgree?: EnumCompanyAgreeFieldUpdateOperationsInput | $Enums.CompanyAgree
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusInvesimentFieldUpdateOperationsInput | $Enums.StatusInvesiment
  }

  export type InvesimentCreateManyInput = {
    id?: string
    projectId: string
    investorId: string
    valueInvested: number
    investedDate?: Date | string
    ownerAgree?: $Enums.OwnerAgree
    compAgree?: $Enums.CompanyAgree
    title: string
    description: string
    status?: $Enums.StatusInvesiment
  }

  export type InvesimentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    valueInvested?: FloatFieldUpdateOperationsInput | number
    investedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerAgree?: EnumOwnerAgreeFieldUpdateOperationsInput | $Enums.OwnerAgree
    compAgree?: EnumCompanyAgreeFieldUpdateOperationsInput | $Enums.CompanyAgree
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusInvesimentFieldUpdateOperationsInput | $Enums.StatusInvesiment
  }

  export type InvesimentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    investorId?: StringFieldUpdateOperationsInput | string
    valueInvested?: FloatFieldUpdateOperationsInput | number
    investedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerAgree?: EnumOwnerAgreeFieldUpdateOperationsInput | $Enums.OwnerAgree
    compAgree?: EnumCompanyAgreeFieldUpdateOperationsInput | $Enums.CompanyAgree
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusInvesimentFieldUpdateOperationsInput | $Enums.StatusInvesiment
  }

  export type projectProposalCreateInput = {
    id?: string
    statusProjectProposal?: $Enums.statusProposal
    createdAt?: Date | string
    ownerAgreeProjectProposal?: $Enums.OwnerAgreeProposal
    projects: ProjectCreateNestedOneWithoutProjectsProposalInput
    lands: LandsCreateNestedOneWithoutProjectsProposalInput
  }

  export type projectProposalUncheckedCreateInput = {
    id?: string
    projectId: string
    landsId: string
    statusProjectProposal?: $Enums.statusProposal
    createdAt?: Date | string
    ownerAgreeProjectProposal?: $Enums.OwnerAgreeProposal
  }

  export type projectProposalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusProjectProposal?: EnumstatusProposalFieldUpdateOperationsInput | $Enums.statusProposal
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerAgreeProjectProposal?: EnumOwnerAgreeProposalFieldUpdateOperationsInput | $Enums.OwnerAgreeProposal
    projects?: ProjectUpdateOneRequiredWithoutProjectsProposalNestedInput
    lands?: LandsUpdateOneRequiredWithoutProjectsProposalNestedInput
  }

  export type projectProposalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    landsId?: StringFieldUpdateOperationsInput | string
    statusProjectProposal?: EnumstatusProposalFieldUpdateOperationsInput | $Enums.statusProposal
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerAgreeProjectProposal?: EnumOwnerAgreeProposalFieldUpdateOperationsInput | $Enums.OwnerAgreeProposal
  }

  export type projectProposalCreateManyInput = {
    id?: string
    projectId: string
    landsId: string
    statusProjectProposal?: $Enums.statusProposal
    createdAt?: Date | string
    ownerAgreeProjectProposal?: $Enums.OwnerAgreeProposal
  }

  export type projectProposalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusProjectProposal?: EnumstatusProposalFieldUpdateOperationsInput | $Enums.statusProposal
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerAgreeProjectProposal?: EnumOwnerAgreeProposalFieldUpdateOperationsInput | $Enums.OwnerAgreeProposal
  }

  export type projectProposalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    landsId?: StringFieldUpdateOperationsInput | string
    statusProjectProposal?: EnumstatusProposalFieldUpdateOperationsInput | $Enums.statusProposal
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerAgreeProjectProposal?: EnumOwnerAgreeProposalFieldUpdateOperationsInput | $Enums.OwnerAgreeProposal
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LandownersNullableScalarRelationFilter = {
    is?: landownersWhereInput | null
    isNot?: landownersWhereInput | null
  }

  export type CompaniesNullableScalarRelationFilter = {
    is?: companiesWhereInput | null
    isNot?: companiesWhereInput | null
  }

  export type InvestorsNullableScalarRelationFilter = {
    is?: investorsWhereInput | null
    isNot?: investorsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type LandownersScalarRelationFilter = {
    is?: landownersWhereInput
    isNot?: landownersWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ProjectProposalListRelationFilter = {
    every?: projectProposalWhereInput
    some?: projectProposalWhereInput
    none?: projectProposalWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type projectProposalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LandsCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    area?: SortOrder
    avaliability?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    district?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
  }

  export type LandsAvgOrderByAggregateInput = {
    area?: SortOrder
  }

  export type LandsMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    area?: SortOrder
    avaliability?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    district?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
  }

  export type LandsMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    area?: SortOrder
    avaliability?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    district?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
  }

  export type LandsSumOrderByAggregateInput = {
    area?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type LandsListRelationFilter = {
    every?: LandsWhereInput
    some?: LandsWhereInput
    none?: LandsWhereInput
  }

  export type LandsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type landownersCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    document_id?: SortOrder
  }

  export type landownersMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    document_id?: SortOrder
  }

  export type landownersMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    document_id?: SortOrder
  }

  export type companiesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    document_id?: SortOrder
    company_name?: SortOrder
  }

  export type companiesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    document_id?: SortOrder
    company_name?: SortOrder
  }

  export type companiesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    document_id?: SortOrder
    company_name?: SortOrder
  }

  export type InvesimentListRelationFilter = {
    every?: InvesimentWhereInput
    some?: InvesimentWhereInput
    none?: InvesimentWhereInput
  }

  export type InvesimentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type investorsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    document_id?: SortOrder
  }

  export type investorsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    document_id?: SortOrder
  }

  export type investorsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    document_id?: SortOrder
  }

  export type EnumStatusApprovalFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusApproval | EnumStatusApprovalFieldRefInput<$PrismaModel>
    in?: $Enums.StatusApproval[] | ListEnumStatusApprovalFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusApproval[] | ListEnumStatusApprovalFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusApprovalFilter<$PrismaModel> | $Enums.StatusApproval
  }

  export type LandsScalarRelationFilter = {
    is?: LandsWhereInput
    isNot?: LandsWhereInput
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    companiesId?: SortOrder
    powerKw?: SortOrder
    cost?: SortOrder
    status?: SortOrder
    estimatedReturn?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    area?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    powerKw?: SortOrder
    cost?: SortOrder
    estimatedReturn?: SortOrder
    area?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    companiesId?: SortOrder
    powerKw?: SortOrder
    cost?: SortOrder
    status?: SortOrder
    estimatedReturn?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    area?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    companiesId?: SortOrder
    powerKw?: SortOrder
    cost?: SortOrder
    status?: SortOrder
    estimatedReturn?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    area?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    powerKw?: SortOrder
    cost?: SortOrder
    estimatedReturn?: SortOrder
    area?: SortOrder
  }

  export type EnumStatusApprovalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusApproval | EnumStatusApprovalFieldRefInput<$PrismaModel>
    in?: $Enums.StatusApproval[] | ListEnumStatusApprovalFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusApproval[] | ListEnumStatusApprovalFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusApprovalWithAggregatesFilter<$PrismaModel> | $Enums.StatusApproval
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusApprovalFilter<$PrismaModel>
    _max?: NestedEnumStatusApprovalFilter<$PrismaModel>
  }

  export type EnumOwnerAgreeFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnerAgree | EnumOwnerAgreeFieldRefInput<$PrismaModel>
    in?: $Enums.OwnerAgree[] | ListEnumOwnerAgreeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OwnerAgree[] | ListEnumOwnerAgreeFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnerAgreeFilter<$PrismaModel> | $Enums.OwnerAgree
  }

  export type EnumCompanyAgreeFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanyAgree | EnumCompanyAgreeFieldRefInput<$PrismaModel>
    in?: $Enums.CompanyAgree[] | ListEnumCompanyAgreeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompanyAgree[] | ListEnumCompanyAgreeFieldRefInput<$PrismaModel>
    not?: NestedEnumCompanyAgreeFilter<$PrismaModel> | $Enums.CompanyAgree
  }

  export type EnumStatusInvesimentFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusInvesiment | EnumStatusInvesimentFieldRefInput<$PrismaModel>
    in?: $Enums.StatusInvesiment[] | ListEnumStatusInvesimentFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusInvesiment[] | ListEnumStatusInvesimentFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusInvesimentFilter<$PrismaModel> | $Enums.StatusInvesiment
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type InvesimentCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    investorId?: SortOrder
    valueInvested?: SortOrder
    investedDate?: SortOrder
    ownerAgree?: SortOrder
    compAgree?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type InvesimentAvgOrderByAggregateInput = {
    valueInvested?: SortOrder
  }

  export type InvesimentMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    investorId?: SortOrder
    valueInvested?: SortOrder
    investedDate?: SortOrder
    ownerAgree?: SortOrder
    compAgree?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type InvesimentMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    investorId?: SortOrder
    valueInvested?: SortOrder
    investedDate?: SortOrder
    ownerAgree?: SortOrder
    compAgree?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type InvesimentSumOrderByAggregateInput = {
    valueInvested?: SortOrder
  }

  export type EnumOwnerAgreeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnerAgree | EnumOwnerAgreeFieldRefInput<$PrismaModel>
    in?: $Enums.OwnerAgree[] | ListEnumOwnerAgreeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OwnerAgree[] | ListEnumOwnerAgreeFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnerAgreeWithAggregatesFilter<$PrismaModel> | $Enums.OwnerAgree
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOwnerAgreeFilter<$PrismaModel>
    _max?: NestedEnumOwnerAgreeFilter<$PrismaModel>
  }

  export type EnumCompanyAgreeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanyAgree | EnumCompanyAgreeFieldRefInput<$PrismaModel>
    in?: $Enums.CompanyAgree[] | ListEnumCompanyAgreeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompanyAgree[] | ListEnumCompanyAgreeFieldRefInput<$PrismaModel>
    not?: NestedEnumCompanyAgreeWithAggregatesFilter<$PrismaModel> | $Enums.CompanyAgree
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCompanyAgreeFilter<$PrismaModel>
    _max?: NestedEnumCompanyAgreeFilter<$PrismaModel>
  }

  export type EnumStatusInvesimentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusInvesiment | EnumStatusInvesimentFieldRefInput<$PrismaModel>
    in?: $Enums.StatusInvesiment[] | ListEnumStatusInvesimentFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusInvesiment[] | ListEnumStatusInvesimentFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusInvesimentWithAggregatesFilter<$PrismaModel> | $Enums.StatusInvesiment
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusInvesimentFilter<$PrismaModel>
    _max?: NestedEnumStatusInvesimentFilter<$PrismaModel>
  }

  export type EnumstatusProposalFilter<$PrismaModel = never> = {
    equals?: $Enums.statusProposal | EnumstatusProposalFieldRefInput<$PrismaModel>
    in?: $Enums.statusProposal[] | ListEnumstatusProposalFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusProposal[] | ListEnumstatusProposalFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusProposalFilter<$PrismaModel> | $Enums.statusProposal
  }

  export type EnumOwnerAgreeProposalFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnerAgreeProposal | EnumOwnerAgreeProposalFieldRefInput<$PrismaModel>
    in?: $Enums.OwnerAgreeProposal[] | ListEnumOwnerAgreeProposalFieldRefInput<$PrismaModel>
    notIn?: $Enums.OwnerAgreeProposal[] | ListEnumOwnerAgreeProposalFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnerAgreeProposalFilter<$PrismaModel> | $Enums.OwnerAgreeProposal
  }

  export type projectProposalCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    landsId?: SortOrder
    statusProjectProposal?: SortOrder
    createdAt?: SortOrder
    ownerAgreeProjectProposal?: SortOrder
  }

  export type projectProposalMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    landsId?: SortOrder
    statusProjectProposal?: SortOrder
    createdAt?: SortOrder
    ownerAgreeProjectProposal?: SortOrder
  }

  export type projectProposalMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    landsId?: SortOrder
    statusProjectProposal?: SortOrder
    createdAt?: SortOrder
    ownerAgreeProjectProposal?: SortOrder
  }

  export type EnumstatusProposalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.statusProposal | EnumstatusProposalFieldRefInput<$PrismaModel>
    in?: $Enums.statusProposal[] | ListEnumstatusProposalFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusProposal[] | ListEnumstatusProposalFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusProposalWithAggregatesFilter<$PrismaModel> | $Enums.statusProposal
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusProposalFilter<$PrismaModel>
    _max?: NestedEnumstatusProposalFilter<$PrismaModel>
  }

  export type EnumOwnerAgreeProposalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnerAgreeProposal | EnumOwnerAgreeProposalFieldRefInput<$PrismaModel>
    in?: $Enums.OwnerAgreeProposal[] | ListEnumOwnerAgreeProposalFieldRefInput<$PrismaModel>
    notIn?: $Enums.OwnerAgreeProposal[] | ListEnumOwnerAgreeProposalFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnerAgreeProposalWithAggregatesFilter<$PrismaModel> | $Enums.OwnerAgreeProposal
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOwnerAgreeProposalFilter<$PrismaModel>
    _max?: NestedEnumOwnerAgreeProposalFilter<$PrismaModel>
  }

  export type landownersCreateNestedOneWithoutUserInput = {
    create?: XOR<landownersCreateWithoutUserInput, landownersUncheckedCreateWithoutUserInput>
    connectOrCreate?: landownersCreateOrConnectWithoutUserInput
    connect?: landownersWhereUniqueInput
  }

  export type companiesCreateNestedOneWithoutUserInput = {
    create?: XOR<companiesCreateWithoutUserInput, companiesUncheckedCreateWithoutUserInput>
    connectOrCreate?: companiesCreateOrConnectWithoutUserInput
    connect?: companiesWhereUniqueInput
  }

  export type investorsCreateNestedOneWithoutUserInput = {
    create?: XOR<investorsCreateWithoutUserInput, investorsUncheckedCreateWithoutUserInput>
    connectOrCreate?: investorsCreateOrConnectWithoutUserInput
    connect?: investorsWhereUniqueInput
  }

  export type landownersUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<landownersCreateWithoutUserInput, landownersUncheckedCreateWithoutUserInput>
    connectOrCreate?: landownersCreateOrConnectWithoutUserInput
    connect?: landownersWhereUniqueInput
  }

  export type companiesUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<companiesCreateWithoutUserInput, companiesUncheckedCreateWithoutUserInput>
    connectOrCreate?: companiesCreateOrConnectWithoutUserInput
    connect?: companiesWhereUniqueInput
  }

  export type investorsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<investorsCreateWithoutUserInput, investorsUncheckedCreateWithoutUserInput>
    connectOrCreate?: investorsCreateOrConnectWithoutUserInput
    connect?: investorsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type landownersUpdateOneWithoutUserNestedInput = {
    create?: XOR<landownersCreateWithoutUserInput, landownersUncheckedCreateWithoutUserInput>
    connectOrCreate?: landownersCreateOrConnectWithoutUserInput
    upsert?: landownersUpsertWithoutUserInput
    disconnect?: landownersWhereInput | boolean
    delete?: landownersWhereInput | boolean
    connect?: landownersWhereUniqueInput
    update?: XOR<XOR<landownersUpdateToOneWithWhereWithoutUserInput, landownersUpdateWithoutUserInput>, landownersUncheckedUpdateWithoutUserInput>
  }

  export type companiesUpdateOneWithoutUserNestedInput = {
    create?: XOR<companiesCreateWithoutUserInput, companiesUncheckedCreateWithoutUserInput>
    connectOrCreate?: companiesCreateOrConnectWithoutUserInput
    upsert?: companiesUpsertWithoutUserInput
    disconnect?: companiesWhereInput | boolean
    delete?: companiesWhereInput | boolean
    connect?: companiesWhereUniqueInput
    update?: XOR<XOR<companiesUpdateToOneWithWhereWithoutUserInput, companiesUpdateWithoutUserInput>, companiesUncheckedUpdateWithoutUserInput>
  }

  export type investorsUpdateOneWithoutUserNestedInput = {
    create?: XOR<investorsCreateWithoutUserInput, investorsUncheckedCreateWithoutUserInput>
    connectOrCreate?: investorsCreateOrConnectWithoutUserInput
    upsert?: investorsUpsertWithoutUserInput
    disconnect?: investorsWhereInput | boolean
    delete?: investorsWhereInput | boolean
    connect?: investorsWhereUniqueInput
    update?: XOR<XOR<investorsUpdateToOneWithWhereWithoutUserInput, investorsUpdateWithoutUserInput>, investorsUncheckedUpdateWithoutUserInput>
  }

  export type landownersUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<landownersCreateWithoutUserInput, landownersUncheckedCreateWithoutUserInput>
    connectOrCreate?: landownersCreateOrConnectWithoutUserInput
    upsert?: landownersUpsertWithoutUserInput
    disconnect?: landownersWhereInput | boolean
    delete?: landownersWhereInput | boolean
    connect?: landownersWhereUniqueInput
    update?: XOR<XOR<landownersUpdateToOneWithWhereWithoutUserInput, landownersUpdateWithoutUserInput>, landownersUncheckedUpdateWithoutUserInput>
  }

  export type companiesUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<companiesCreateWithoutUserInput, companiesUncheckedCreateWithoutUserInput>
    connectOrCreate?: companiesCreateOrConnectWithoutUserInput
    upsert?: companiesUpsertWithoutUserInput
    disconnect?: companiesWhereInput | boolean
    delete?: companiesWhereInput | boolean
    connect?: companiesWhereUniqueInput
    update?: XOR<XOR<companiesUpdateToOneWithWhereWithoutUserInput, companiesUpdateWithoutUserInput>, companiesUncheckedUpdateWithoutUserInput>
  }

  export type investorsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<investorsCreateWithoutUserInput, investorsUncheckedCreateWithoutUserInput>
    connectOrCreate?: investorsCreateOrConnectWithoutUserInput
    upsert?: investorsUpsertWithoutUserInput
    disconnect?: investorsWhereInput | boolean
    delete?: investorsWhereInput | boolean
    connect?: investorsWhereUniqueInput
    update?: XOR<XOR<investorsUpdateToOneWithWhereWithoutUserInput, investorsUpdateWithoutUserInput>, investorsUncheckedUpdateWithoutUserInput>
  }

  export type landownersCreateNestedOneWithoutLandsInput = {
    create?: XOR<landownersCreateWithoutLandsInput, landownersUncheckedCreateWithoutLandsInput>
    connectOrCreate?: landownersCreateOrConnectWithoutLandsInput
    connect?: landownersWhereUniqueInput
  }

  export type ProjectCreateNestedManyWithoutLandProjectInput = {
    create?: XOR<ProjectCreateWithoutLandProjectInput, ProjectUncheckedCreateWithoutLandProjectInput> | ProjectCreateWithoutLandProjectInput[] | ProjectUncheckedCreateWithoutLandProjectInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutLandProjectInput | ProjectCreateOrConnectWithoutLandProjectInput[]
    createMany?: ProjectCreateManyLandProjectInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type projectProposalCreateNestedManyWithoutLandsInput = {
    create?: XOR<projectProposalCreateWithoutLandsInput, projectProposalUncheckedCreateWithoutLandsInput> | projectProposalCreateWithoutLandsInput[] | projectProposalUncheckedCreateWithoutLandsInput[]
    connectOrCreate?: projectProposalCreateOrConnectWithoutLandsInput | projectProposalCreateOrConnectWithoutLandsInput[]
    createMany?: projectProposalCreateManyLandsInputEnvelope
    connect?: projectProposalWhereUniqueInput | projectProposalWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutLandProjectInput = {
    create?: XOR<ProjectCreateWithoutLandProjectInput, ProjectUncheckedCreateWithoutLandProjectInput> | ProjectCreateWithoutLandProjectInput[] | ProjectUncheckedCreateWithoutLandProjectInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutLandProjectInput | ProjectCreateOrConnectWithoutLandProjectInput[]
    createMany?: ProjectCreateManyLandProjectInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type projectProposalUncheckedCreateNestedManyWithoutLandsInput = {
    create?: XOR<projectProposalCreateWithoutLandsInput, projectProposalUncheckedCreateWithoutLandsInput> | projectProposalCreateWithoutLandsInput[] | projectProposalUncheckedCreateWithoutLandsInput[]
    connectOrCreate?: projectProposalCreateOrConnectWithoutLandsInput | projectProposalCreateOrConnectWithoutLandsInput[]
    createMany?: projectProposalCreateManyLandsInputEnvelope
    connect?: projectProposalWhereUniqueInput | projectProposalWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type landownersUpdateOneRequiredWithoutLandsNestedInput = {
    create?: XOR<landownersCreateWithoutLandsInput, landownersUncheckedCreateWithoutLandsInput>
    connectOrCreate?: landownersCreateOrConnectWithoutLandsInput
    upsert?: landownersUpsertWithoutLandsInput
    connect?: landownersWhereUniqueInput
    update?: XOR<XOR<landownersUpdateToOneWithWhereWithoutLandsInput, landownersUpdateWithoutLandsInput>, landownersUncheckedUpdateWithoutLandsInput>
  }

  export type ProjectUpdateManyWithoutLandProjectNestedInput = {
    create?: XOR<ProjectCreateWithoutLandProjectInput, ProjectUncheckedCreateWithoutLandProjectInput> | ProjectCreateWithoutLandProjectInput[] | ProjectUncheckedCreateWithoutLandProjectInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutLandProjectInput | ProjectCreateOrConnectWithoutLandProjectInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutLandProjectInput | ProjectUpsertWithWhereUniqueWithoutLandProjectInput[]
    createMany?: ProjectCreateManyLandProjectInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutLandProjectInput | ProjectUpdateWithWhereUniqueWithoutLandProjectInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutLandProjectInput | ProjectUpdateManyWithWhereWithoutLandProjectInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type projectProposalUpdateManyWithoutLandsNestedInput = {
    create?: XOR<projectProposalCreateWithoutLandsInput, projectProposalUncheckedCreateWithoutLandsInput> | projectProposalCreateWithoutLandsInput[] | projectProposalUncheckedCreateWithoutLandsInput[]
    connectOrCreate?: projectProposalCreateOrConnectWithoutLandsInput | projectProposalCreateOrConnectWithoutLandsInput[]
    upsert?: projectProposalUpsertWithWhereUniqueWithoutLandsInput | projectProposalUpsertWithWhereUniqueWithoutLandsInput[]
    createMany?: projectProposalCreateManyLandsInputEnvelope
    set?: projectProposalWhereUniqueInput | projectProposalWhereUniqueInput[]
    disconnect?: projectProposalWhereUniqueInput | projectProposalWhereUniqueInput[]
    delete?: projectProposalWhereUniqueInput | projectProposalWhereUniqueInput[]
    connect?: projectProposalWhereUniqueInput | projectProposalWhereUniqueInput[]
    update?: projectProposalUpdateWithWhereUniqueWithoutLandsInput | projectProposalUpdateWithWhereUniqueWithoutLandsInput[]
    updateMany?: projectProposalUpdateManyWithWhereWithoutLandsInput | projectProposalUpdateManyWithWhereWithoutLandsInput[]
    deleteMany?: projectProposalScalarWhereInput | projectProposalScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutLandProjectNestedInput = {
    create?: XOR<ProjectCreateWithoutLandProjectInput, ProjectUncheckedCreateWithoutLandProjectInput> | ProjectCreateWithoutLandProjectInput[] | ProjectUncheckedCreateWithoutLandProjectInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutLandProjectInput | ProjectCreateOrConnectWithoutLandProjectInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutLandProjectInput | ProjectUpsertWithWhereUniqueWithoutLandProjectInput[]
    createMany?: ProjectCreateManyLandProjectInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutLandProjectInput | ProjectUpdateWithWhereUniqueWithoutLandProjectInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutLandProjectInput | ProjectUpdateManyWithWhereWithoutLandProjectInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type projectProposalUncheckedUpdateManyWithoutLandsNestedInput = {
    create?: XOR<projectProposalCreateWithoutLandsInput, projectProposalUncheckedCreateWithoutLandsInput> | projectProposalCreateWithoutLandsInput[] | projectProposalUncheckedCreateWithoutLandsInput[]
    connectOrCreate?: projectProposalCreateOrConnectWithoutLandsInput | projectProposalCreateOrConnectWithoutLandsInput[]
    upsert?: projectProposalUpsertWithWhereUniqueWithoutLandsInput | projectProposalUpsertWithWhereUniqueWithoutLandsInput[]
    createMany?: projectProposalCreateManyLandsInputEnvelope
    set?: projectProposalWhereUniqueInput | projectProposalWhereUniqueInput[]
    disconnect?: projectProposalWhereUniqueInput | projectProposalWhereUniqueInput[]
    delete?: projectProposalWhereUniqueInput | projectProposalWhereUniqueInput[]
    connect?: projectProposalWhereUniqueInput | projectProposalWhereUniqueInput[]
    update?: projectProposalUpdateWithWhereUniqueWithoutLandsInput | projectProposalUpdateWithWhereUniqueWithoutLandsInput[]
    updateMany?: projectProposalUpdateManyWithWhereWithoutLandsInput | projectProposalUpdateManyWithWhereWithoutLandsInput[]
    deleteMany?: projectProposalScalarWhereInput | projectProposalScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutLandOwnerInput = {
    create?: XOR<UsersCreateWithoutLandOwnerInput, UsersUncheckedCreateWithoutLandOwnerInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLandOwnerInput
    connect?: UsersWhereUniqueInput
  }

  export type LandsCreateNestedManyWithoutOwnerInput = {
    create?: XOR<LandsCreateWithoutOwnerInput, LandsUncheckedCreateWithoutOwnerInput> | LandsCreateWithoutOwnerInput[] | LandsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: LandsCreateOrConnectWithoutOwnerInput | LandsCreateOrConnectWithoutOwnerInput[]
    createMany?: LandsCreateManyOwnerInputEnvelope
    connect?: LandsWhereUniqueInput | LandsWhereUniqueInput[]
  }

  export type LandsUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<LandsCreateWithoutOwnerInput, LandsUncheckedCreateWithoutOwnerInput> | LandsCreateWithoutOwnerInput[] | LandsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: LandsCreateOrConnectWithoutOwnerInput | LandsCreateOrConnectWithoutOwnerInput[]
    createMany?: LandsCreateManyOwnerInputEnvelope
    connect?: LandsWhereUniqueInput | LandsWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutLandOwnerNestedInput = {
    create?: XOR<UsersCreateWithoutLandOwnerInput, UsersUncheckedCreateWithoutLandOwnerInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLandOwnerInput
    upsert?: UsersUpsertWithoutLandOwnerInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutLandOwnerInput, UsersUpdateWithoutLandOwnerInput>, UsersUncheckedUpdateWithoutLandOwnerInput>
  }

  export type LandsUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<LandsCreateWithoutOwnerInput, LandsUncheckedCreateWithoutOwnerInput> | LandsCreateWithoutOwnerInput[] | LandsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: LandsCreateOrConnectWithoutOwnerInput | LandsCreateOrConnectWithoutOwnerInput[]
    upsert?: LandsUpsertWithWhereUniqueWithoutOwnerInput | LandsUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: LandsCreateManyOwnerInputEnvelope
    set?: LandsWhereUniqueInput | LandsWhereUniqueInput[]
    disconnect?: LandsWhereUniqueInput | LandsWhereUniqueInput[]
    delete?: LandsWhereUniqueInput | LandsWhereUniqueInput[]
    connect?: LandsWhereUniqueInput | LandsWhereUniqueInput[]
    update?: LandsUpdateWithWhereUniqueWithoutOwnerInput | LandsUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: LandsUpdateManyWithWhereWithoutOwnerInput | LandsUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: LandsScalarWhereInput | LandsScalarWhereInput[]
  }

  export type LandsUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<LandsCreateWithoutOwnerInput, LandsUncheckedCreateWithoutOwnerInput> | LandsCreateWithoutOwnerInput[] | LandsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: LandsCreateOrConnectWithoutOwnerInput | LandsCreateOrConnectWithoutOwnerInput[]
    upsert?: LandsUpsertWithWhereUniqueWithoutOwnerInput | LandsUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: LandsCreateManyOwnerInputEnvelope
    set?: LandsWhereUniqueInput | LandsWhereUniqueInput[]
    disconnect?: LandsWhereUniqueInput | LandsWhereUniqueInput[]
    delete?: LandsWhereUniqueInput | LandsWhereUniqueInput[]
    connect?: LandsWhereUniqueInput | LandsWhereUniqueInput[]
    update?: LandsUpdateWithWhereUniqueWithoutOwnerInput | LandsUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: LandsUpdateManyWithWhereWithoutOwnerInput | LandsUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: LandsScalarWhereInput | LandsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutCompanyInput = {
    create?: XOR<UsersCreateWithoutCompanyInput, UsersUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCompanyInput
    connect?: UsersWhereUniqueInput
  }

  export type ProjectCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput> | ProjectCreateWithoutCompanyInput[] | ProjectUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCompanyInput | ProjectCreateOrConnectWithoutCompanyInput[]
    createMany?: ProjectCreateManyCompanyInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput> | ProjectCreateWithoutCompanyInput[] | ProjectUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCompanyInput | ProjectCreateOrConnectWithoutCompanyInput[]
    createMany?: ProjectCreateManyCompanyInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<UsersCreateWithoutCompanyInput, UsersUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCompanyInput
    upsert?: UsersUpsertWithoutCompanyInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCompanyInput, UsersUpdateWithoutCompanyInput>, UsersUncheckedUpdateWithoutCompanyInput>
  }

  export type ProjectUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput> | ProjectCreateWithoutCompanyInput[] | ProjectUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCompanyInput | ProjectCreateOrConnectWithoutCompanyInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCompanyInput | ProjectUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ProjectCreateManyCompanyInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCompanyInput | ProjectUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCompanyInput | ProjectUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput> | ProjectCreateWithoutCompanyInput[] | ProjectUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCompanyInput | ProjectCreateOrConnectWithoutCompanyInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCompanyInput | ProjectUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ProjectCreateManyCompanyInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCompanyInput | ProjectUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCompanyInput | ProjectUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutInvestorInput = {
    create?: XOR<UsersCreateWithoutInvestorInput, UsersUncheckedCreateWithoutInvestorInput>
    connectOrCreate?: UsersCreateOrConnectWithoutInvestorInput
    connect?: UsersWhereUniqueInput
  }

  export type InvesimentCreateNestedManyWithoutInvestorInput = {
    create?: XOR<InvesimentCreateWithoutInvestorInput, InvesimentUncheckedCreateWithoutInvestorInput> | InvesimentCreateWithoutInvestorInput[] | InvesimentUncheckedCreateWithoutInvestorInput[]
    connectOrCreate?: InvesimentCreateOrConnectWithoutInvestorInput | InvesimentCreateOrConnectWithoutInvestorInput[]
    createMany?: InvesimentCreateManyInvestorInputEnvelope
    connect?: InvesimentWhereUniqueInput | InvesimentWhereUniqueInput[]
  }

  export type InvesimentUncheckedCreateNestedManyWithoutInvestorInput = {
    create?: XOR<InvesimentCreateWithoutInvestorInput, InvesimentUncheckedCreateWithoutInvestorInput> | InvesimentCreateWithoutInvestorInput[] | InvesimentUncheckedCreateWithoutInvestorInput[]
    connectOrCreate?: InvesimentCreateOrConnectWithoutInvestorInput | InvesimentCreateOrConnectWithoutInvestorInput[]
    createMany?: InvesimentCreateManyInvestorInputEnvelope
    connect?: InvesimentWhereUniqueInput | InvesimentWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutInvestorNestedInput = {
    create?: XOR<UsersCreateWithoutInvestorInput, UsersUncheckedCreateWithoutInvestorInput>
    connectOrCreate?: UsersCreateOrConnectWithoutInvestorInput
    upsert?: UsersUpsertWithoutInvestorInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutInvestorInput, UsersUpdateWithoutInvestorInput>, UsersUncheckedUpdateWithoutInvestorInput>
  }

  export type InvesimentUpdateManyWithoutInvestorNestedInput = {
    create?: XOR<InvesimentCreateWithoutInvestorInput, InvesimentUncheckedCreateWithoutInvestorInput> | InvesimentCreateWithoutInvestorInput[] | InvesimentUncheckedCreateWithoutInvestorInput[]
    connectOrCreate?: InvesimentCreateOrConnectWithoutInvestorInput | InvesimentCreateOrConnectWithoutInvestorInput[]
    upsert?: InvesimentUpsertWithWhereUniqueWithoutInvestorInput | InvesimentUpsertWithWhereUniqueWithoutInvestorInput[]
    createMany?: InvesimentCreateManyInvestorInputEnvelope
    set?: InvesimentWhereUniqueInput | InvesimentWhereUniqueInput[]
    disconnect?: InvesimentWhereUniqueInput | InvesimentWhereUniqueInput[]
    delete?: InvesimentWhereUniqueInput | InvesimentWhereUniqueInput[]
    connect?: InvesimentWhereUniqueInput | InvesimentWhereUniqueInput[]
    update?: InvesimentUpdateWithWhereUniqueWithoutInvestorInput | InvesimentUpdateWithWhereUniqueWithoutInvestorInput[]
    updateMany?: InvesimentUpdateManyWithWhereWithoutInvestorInput | InvesimentUpdateManyWithWhereWithoutInvestorInput[]
    deleteMany?: InvesimentScalarWhereInput | InvesimentScalarWhereInput[]
  }

  export type InvesimentUncheckedUpdateManyWithoutInvestorNestedInput = {
    create?: XOR<InvesimentCreateWithoutInvestorInput, InvesimentUncheckedCreateWithoutInvestorInput> | InvesimentCreateWithoutInvestorInput[] | InvesimentUncheckedCreateWithoutInvestorInput[]
    connectOrCreate?: InvesimentCreateOrConnectWithoutInvestorInput | InvesimentCreateOrConnectWithoutInvestorInput[]
    upsert?: InvesimentUpsertWithWhereUniqueWithoutInvestorInput | InvesimentUpsertWithWhereUniqueWithoutInvestorInput[]
    createMany?: InvesimentCreateManyInvestorInputEnvelope
    set?: InvesimentWhereUniqueInput | InvesimentWhereUniqueInput[]
    disconnect?: InvesimentWhereUniqueInput | InvesimentWhereUniqueInput[]
    delete?: InvesimentWhereUniqueInput | InvesimentWhereUniqueInput[]
    connect?: InvesimentWhereUniqueInput | InvesimentWhereUniqueInput[]
    update?: InvesimentUpdateWithWhereUniqueWithoutInvestorInput | InvesimentUpdateWithWhereUniqueWithoutInvestorInput[]
    updateMany?: InvesimentUpdateManyWithWhereWithoutInvestorInput | InvesimentUpdateManyWithWhereWithoutInvestorInput[]
    deleteMany?: InvesimentScalarWhereInput | InvesimentScalarWhereInput[]
  }

  export type LandsCreateNestedOneWithoutProjectsInput = {
    create?: XOR<LandsCreateWithoutProjectsInput, LandsUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: LandsCreateOrConnectWithoutProjectsInput
    connect?: LandsWhereUniqueInput
  }

  export type companiesCreateNestedOneWithoutProjectsInput = {
    create?: XOR<companiesCreateWithoutProjectsInput, companiesUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: companiesCreateOrConnectWithoutProjectsInput
    connect?: companiesWhereUniqueInput
  }

  export type InvesimentCreateNestedManyWithoutProjectInput = {
    create?: XOR<InvesimentCreateWithoutProjectInput, InvesimentUncheckedCreateWithoutProjectInput> | InvesimentCreateWithoutProjectInput[] | InvesimentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: InvesimentCreateOrConnectWithoutProjectInput | InvesimentCreateOrConnectWithoutProjectInput[]
    createMany?: InvesimentCreateManyProjectInputEnvelope
    connect?: InvesimentWhereUniqueInput | InvesimentWhereUniqueInput[]
  }

  export type projectProposalCreateNestedManyWithoutProjectsInput = {
    create?: XOR<projectProposalCreateWithoutProjectsInput, projectProposalUncheckedCreateWithoutProjectsInput> | projectProposalCreateWithoutProjectsInput[] | projectProposalUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: projectProposalCreateOrConnectWithoutProjectsInput | projectProposalCreateOrConnectWithoutProjectsInput[]
    createMany?: projectProposalCreateManyProjectsInputEnvelope
    connect?: projectProposalWhereUniqueInput | projectProposalWhereUniqueInput[]
  }

  export type InvesimentUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<InvesimentCreateWithoutProjectInput, InvesimentUncheckedCreateWithoutProjectInput> | InvesimentCreateWithoutProjectInput[] | InvesimentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: InvesimentCreateOrConnectWithoutProjectInput | InvesimentCreateOrConnectWithoutProjectInput[]
    createMany?: InvesimentCreateManyProjectInputEnvelope
    connect?: InvesimentWhereUniqueInput | InvesimentWhereUniqueInput[]
  }

  export type projectProposalUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<projectProposalCreateWithoutProjectsInput, projectProposalUncheckedCreateWithoutProjectsInput> | projectProposalCreateWithoutProjectsInput[] | projectProposalUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: projectProposalCreateOrConnectWithoutProjectsInput | projectProposalCreateOrConnectWithoutProjectsInput[]
    createMany?: projectProposalCreateManyProjectsInputEnvelope
    connect?: projectProposalWhereUniqueInput | projectProposalWhereUniqueInput[]
  }

  export type EnumStatusApprovalFieldUpdateOperationsInput = {
    set?: $Enums.StatusApproval
  }

  export type LandsUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<LandsCreateWithoutProjectsInput, LandsUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: LandsCreateOrConnectWithoutProjectsInput
    upsert?: LandsUpsertWithoutProjectsInput
    connect?: LandsWhereUniqueInput
    update?: XOR<XOR<LandsUpdateToOneWithWhereWithoutProjectsInput, LandsUpdateWithoutProjectsInput>, LandsUncheckedUpdateWithoutProjectsInput>
  }

  export type companiesUpdateOneWithoutProjectsNestedInput = {
    create?: XOR<companiesCreateWithoutProjectsInput, companiesUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: companiesCreateOrConnectWithoutProjectsInput
    upsert?: companiesUpsertWithoutProjectsInput
    disconnect?: companiesWhereInput | boolean
    delete?: companiesWhereInput | boolean
    connect?: companiesWhereUniqueInput
    update?: XOR<XOR<companiesUpdateToOneWithWhereWithoutProjectsInput, companiesUpdateWithoutProjectsInput>, companiesUncheckedUpdateWithoutProjectsInput>
  }

  export type InvesimentUpdateManyWithoutProjectNestedInput = {
    create?: XOR<InvesimentCreateWithoutProjectInput, InvesimentUncheckedCreateWithoutProjectInput> | InvesimentCreateWithoutProjectInput[] | InvesimentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: InvesimentCreateOrConnectWithoutProjectInput | InvesimentCreateOrConnectWithoutProjectInput[]
    upsert?: InvesimentUpsertWithWhereUniqueWithoutProjectInput | InvesimentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: InvesimentCreateManyProjectInputEnvelope
    set?: InvesimentWhereUniqueInput | InvesimentWhereUniqueInput[]
    disconnect?: InvesimentWhereUniqueInput | InvesimentWhereUniqueInput[]
    delete?: InvesimentWhereUniqueInput | InvesimentWhereUniqueInput[]
    connect?: InvesimentWhereUniqueInput | InvesimentWhereUniqueInput[]
    update?: InvesimentUpdateWithWhereUniqueWithoutProjectInput | InvesimentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: InvesimentUpdateManyWithWhereWithoutProjectInput | InvesimentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: InvesimentScalarWhereInput | InvesimentScalarWhereInput[]
  }

  export type projectProposalUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<projectProposalCreateWithoutProjectsInput, projectProposalUncheckedCreateWithoutProjectsInput> | projectProposalCreateWithoutProjectsInput[] | projectProposalUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: projectProposalCreateOrConnectWithoutProjectsInput | projectProposalCreateOrConnectWithoutProjectsInput[]
    upsert?: projectProposalUpsertWithWhereUniqueWithoutProjectsInput | projectProposalUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: projectProposalCreateManyProjectsInputEnvelope
    set?: projectProposalWhereUniqueInput | projectProposalWhereUniqueInput[]
    disconnect?: projectProposalWhereUniqueInput | projectProposalWhereUniqueInput[]
    delete?: projectProposalWhereUniqueInput | projectProposalWhereUniqueInput[]
    connect?: projectProposalWhereUniqueInput | projectProposalWhereUniqueInput[]
    update?: projectProposalUpdateWithWhereUniqueWithoutProjectsInput | projectProposalUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: projectProposalUpdateManyWithWhereWithoutProjectsInput | projectProposalUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: projectProposalScalarWhereInput | projectProposalScalarWhereInput[]
  }

  export type InvesimentUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<InvesimentCreateWithoutProjectInput, InvesimentUncheckedCreateWithoutProjectInput> | InvesimentCreateWithoutProjectInput[] | InvesimentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: InvesimentCreateOrConnectWithoutProjectInput | InvesimentCreateOrConnectWithoutProjectInput[]
    upsert?: InvesimentUpsertWithWhereUniqueWithoutProjectInput | InvesimentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: InvesimentCreateManyProjectInputEnvelope
    set?: InvesimentWhereUniqueInput | InvesimentWhereUniqueInput[]
    disconnect?: InvesimentWhereUniqueInput | InvesimentWhereUniqueInput[]
    delete?: InvesimentWhereUniqueInput | InvesimentWhereUniqueInput[]
    connect?: InvesimentWhereUniqueInput | InvesimentWhereUniqueInput[]
    update?: InvesimentUpdateWithWhereUniqueWithoutProjectInput | InvesimentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: InvesimentUpdateManyWithWhereWithoutProjectInput | InvesimentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: InvesimentScalarWhereInput | InvesimentScalarWhereInput[]
  }

  export type projectProposalUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<projectProposalCreateWithoutProjectsInput, projectProposalUncheckedCreateWithoutProjectsInput> | projectProposalCreateWithoutProjectsInput[] | projectProposalUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: projectProposalCreateOrConnectWithoutProjectsInput | projectProposalCreateOrConnectWithoutProjectsInput[]
    upsert?: projectProposalUpsertWithWhereUniqueWithoutProjectsInput | projectProposalUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: projectProposalCreateManyProjectsInputEnvelope
    set?: projectProposalWhereUniqueInput | projectProposalWhereUniqueInput[]
    disconnect?: projectProposalWhereUniqueInput | projectProposalWhereUniqueInput[]
    delete?: projectProposalWhereUniqueInput | projectProposalWhereUniqueInput[]
    connect?: projectProposalWhereUniqueInput | projectProposalWhereUniqueInput[]
    update?: projectProposalUpdateWithWhereUniqueWithoutProjectsInput | projectProposalUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: projectProposalUpdateManyWithWhereWithoutProjectsInput | projectProposalUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: projectProposalScalarWhereInput | projectProposalScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutInvestmentsInput = {
    create?: XOR<ProjectCreateWithoutInvestmentsInput, ProjectUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutInvestmentsInput
    connect?: ProjectWhereUniqueInput
  }

  export type investorsCreateNestedOneWithoutInvesimentsInput = {
    create?: XOR<investorsCreateWithoutInvesimentsInput, investorsUncheckedCreateWithoutInvesimentsInput>
    connectOrCreate?: investorsCreateOrConnectWithoutInvesimentsInput
    connect?: investorsWhereUniqueInput
  }

  export type EnumOwnerAgreeFieldUpdateOperationsInput = {
    set?: $Enums.OwnerAgree
  }

  export type EnumCompanyAgreeFieldUpdateOperationsInput = {
    set?: $Enums.CompanyAgree
  }

  export type EnumStatusInvesimentFieldUpdateOperationsInput = {
    set?: $Enums.StatusInvesiment
  }

  export type ProjectUpdateOneRequiredWithoutInvestmentsNestedInput = {
    create?: XOR<ProjectCreateWithoutInvestmentsInput, ProjectUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutInvestmentsInput
    upsert?: ProjectUpsertWithoutInvestmentsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutInvestmentsInput, ProjectUpdateWithoutInvestmentsInput>, ProjectUncheckedUpdateWithoutInvestmentsInput>
  }

  export type investorsUpdateOneWithoutInvesimentsNestedInput = {
    create?: XOR<investorsCreateWithoutInvesimentsInput, investorsUncheckedCreateWithoutInvesimentsInput>
    connectOrCreate?: investorsCreateOrConnectWithoutInvesimentsInput
    upsert?: investorsUpsertWithoutInvesimentsInput
    disconnect?: investorsWhereInput | boolean
    delete?: investorsWhereInput | boolean
    connect?: investorsWhereUniqueInput
    update?: XOR<XOR<investorsUpdateToOneWithWhereWithoutInvesimentsInput, investorsUpdateWithoutInvesimentsInput>, investorsUncheckedUpdateWithoutInvesimentsInput>
  }

  export type ProjectCreateNestedOneWithoutProjectsProposalInput = {
    create?: XOR<ProjectCreateWithoutProjectsProposalInput, ProjectUncheckedCreateWithoutProjectsProposalInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectsProposalInput
    connect?: ProjectWhereUniqueInput
  }

  export type LandsCreateNestedOneWithoutProjectsProposalInput = {
    create?: XOR<LandsCreateWithoutProjectsProposalInput, LandsUncheckedCreateWithoutProjectsProposalInput>
    connectOrCreate?: LandsCreateOrConnectWithoutProjectsProposalInput
    connect?: LandsWhereUniqueInput
  }

  export type EnumstatusProposalFieldUpdateOperationsInput = {
    set?: $Enums.statusProposal
  }

  export type EnumOwnerAgreeProposalFieldUpdateOperationsInput = {
    set?: $Enums.OwnerAgreeProposal
  }

  export type ProjectUpdateOneRequiredWithoutProjectsProposalNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectsProposalInput, ProjectUncheckedCreateWithoutProjectsProposalInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectsProposalInput
    upsert?: ProjectUpsertWithoutProjectsProposalInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutProjectsProposalInput, ProjectUpdateWithoutProjectsProposalInput>, ProjectUncheckedUpdateWithoutProjectsProposalInput>
  }

  export type LandsUpdateOneRequiredWithoutProjectsProposalNestedInput = {
    create?: XOR<LandsCreateWithoutProjectsProposalInput, LandsUncheckedCreateWithoutProjectsProposalInput>
    connectOrCreate?: LandsCreateOrConnectWithoutProjectsProposalInput
    upsert?: LandsUpsertWithoutProjectsProposalInput
    connect?: LandsWhereUniqueInput
    update?: XOR<XOR<LandsUpdateToOneWithWhereWithoutProjectsProposalInput, LandsUpdateWithoutProjectsProposalInput>, LandsUncheckedUpdateWithoutProjectsProposalInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumStatusApprovalFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusApproval | EnumStatusApprovalFieldRefInput<$PrismaModel>
    in?: $Enums.StatusApproval[] | ListEnumStatusApprovalFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusApproval[] | ListEnumStatusApprovalFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusApprovalFilter<$PrismaModel> | $Enums.StatusApproval
  }

  export type NestedEnumStatusApprovalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusApproval | EnumStatusApprovalFieldRefInput<$PrismaModel>
    in?: $Enums.StatusApproval[] | ListEnumStatusApprovalFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusApproval[] | ListEnumStatusApprovalFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusApprovalWithAggregatesFilter<$PrismaModel> | $Enums.StatusApproval
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusApprovalFilter<$PrismaModel>
    _max?: NestedEnumStatusApprovalFilter<$PrismaModel>
  }

  export type NestedEnumOwnerAgreeFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnerAgree | EnumOwnerAgreeFieldRefInput<$PrismaModel>
    in?: $Enums.OwnerAgree[] | ListEnumOwnerAgreeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OwnerAgree[] | ListEnumOwnerAgreeFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnerAgreeFilter<$PrismaModel> | $Enums.OwnerAgree
  }

  export type NestedEnumCompanyAgreeFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanyAgree | EnumCompanyAgreeFieldRefInput<$PrismaModel>
    in?: $Enums.CompanyAgree[] | ListEnumCompanyAgreeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompanyAgree[] | ListEnumCompanyAgreeFieldRefInput<$PrismaModel>
    not?: NestedEnumCompanyAgreeFilter<$PrismaModel> | $Enums.CompanyAgree
  }

  export type NestedEnumStatusInvesimentFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusInvesiment | EnumStatusInvesimentFieldRefInput<$PrismaModel>
    in?: $Enums.StatusInvesiment[] | ListEnumStatusInvesimentFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusInvesiment[] | ListEnumStatusInvesimentFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusInvesimentFilter<$PrismaModel> | $Enums.StatusInvesiment
  }

  export type NestedEnumOwnerAgreeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnerAgree | EnumOwnerAgreeFieldRefInput<$PrismaModel>
    in?: $Enums.OwnerAgree[] | ListEnumOwnerAgreeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OwnerAgree[] | ListEnumOwnerAgreeFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnerAgreeWithAggregatesFilter<$PrismaModel> | $Enums.OwnerAgree
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOwnerAgreeFilter<$PrismaModel>
    _max?: NestedEnumOwnerAgreeFilter<$PrismaModel>
  }

  export type NestedEnumCompanyAgreeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanyAgree | EnumCompanyAgreeFieldRefInput<$PrismaModel>
    in?: $Enums.CompanyAgree[] | ListEnumCompanyAgreeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompanyAgree[] | ListEnumCompanyAgreeFieldRefInput<$PrismaModel>
    not?: NestedEnumCompanyAgreeWithAggregatesFilter<$PrismaModel> | $Enums.CompanyAgree
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCompanyAgreeFilter<$PrismaModel>
    _max?: NestedEnumCompanyAgreeFilter<$PrismaModel>
  }

  export type NestedEnumStatusInvesimentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusInvesiment | EnumStatusInvesimentFieldRefInput<$PrismaModel>
    in?: $Enums.StatusInvesiment[] | ListEnumStatusInvesimentFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusInvesiment[] | ListEnumStatusInvesimentFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusInvesimentWithAggregatesFilter<$PrismaModel> | $Enums.StatusInvesiment
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusInvesimentFilter<$PrismaModel>
    _max?: NestedEnumStatusInvesimentFilter<$PrismaModel>
  }

  export type NestedEnumstatusProposalFilter<$PrismaModel = never> = {
    equals?: $Enums.statusProposal | EnumstatusProposalFieldRefInput<$PrismaModel>
    in?: $Enums.statusProposal[] | ListEnumstatusProposalFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusProposal[] | ListEnumstatusProposalFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusProposalFilter<$PrismaModel> | $Enums.statusProposal
  }

  export type NestedEnumOwnerAgreeProposalFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnerAgreeProposal | EnumOwnerAgreeProposalFieldRefInput<$PrismaModel>
    in?: $Enums.OwnerAgreeProposal[] | ListEnumOwnerAgreeProposalFieldRefInput<$PrismaModel>
    notIn?: $Enums.OwnerAgreeProposal[] | ListEnumOwnerAgreeProposalFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnerAgreeProposalFilter<$PrismaModel> | $Enums.OwnerAgreeProposal
  }

  export type NestedEnumstatusProposalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.statusProposal | EnumstatusProposalFieldRefInput<$PrismaModel>
    in?: $Enums.statusProposal[] | ListEnumstatusProposalFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusProposal[] | ListEnumstatusProposalFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusProposalWithAggregatesFilter<$PrismaModel> | $Enums.statusProposal
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusProposalFilter<$PrismaModel>
    _max?: NestedEnumstatusProposalFilter<$PrismaModel>
  }

  export type NestedEnumOwnerAgreeProposalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnerAgreeProposal | EnumOwnerAgreeProposalFieldRefInput<$PrismaModel>
    in?: $Enums.OwnerAgreeProposal[] | ListEnumOwnerAgreeProposalFieldRefInput<$PrismaModel>
    notIn?: $Enums.OwnerAgreeProposal[] | ListEnumOwnerAgreeProposalFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnerAgreeProposalWithAggregatesFilter<$PrismaModel> | $Enums.OwnerAgreeProposal
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOwnerAgreeProposalFilter<$PrismaModel>
    _max?: NestedEnumOwnerAgreeProposalFilter<$PrismaModel>
  }

  export type landownersCreateWithoutUserInput = {
    id?: string
    document_id: string
    lands?: LandsCreateNestedManyWithoutOwnerInput
  }

  export type landownersUncheckedCreateWithoutUserInput = {
    id?: string
    document_id: string
    lands?: LandsUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type landownersCreateOrConnectWithoutUserInput = {
    where: landownersWhereUniqueInput
    create: XOR<landownersCreateWithoutUserInput, landownersUncheckedCreateWithoutUserInput>
  }

  export type companiesCreateWithoutUserInput = {
    id?: string
    document_id: string
    company_name: string
    projects?: ProjectCreateNestedManyWithoutCompanyInput
  }

  export type companiesUncheckedCreateWithoutUserInput = {
    id?: string
    document_id: string
    company_name: string
    projects?: ProjectUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companiesCreateOrConnectWithoutUserInput = {
    where: companiesWhereUniqueInput
    create: XOR<companiesCreateWithoutUserInput, companiesUncheckedCreateWithoutUserInput>
  }

  export type investorsCreateWithoutUserInput = {
    id?: string
    document_id: string
    invesiments?: InvesimentCreateNestedManyWithoutInvestorInput
  }

  export type investorsUncheckedCreateWithoutUserInput = {
    id?: string
    document_id: string
    invesiments?: InvesimentUncheckedCreateNestedManyWithoutInvestorInput
  }

  export type investorsCreateOrConnectWithoutUserInput = {
    where: investorsWhereUniqueInput
    create: XOR<investorsCreateWithoutUserInput, investorsUncheckedCreateWithoutUserInput>
  }

  export type landownersUpsertWithoutUserInput = {
    update: XOR<landownersUpdateWithoutUserInput, landownersUncheckedUpdateWithoutUserInput>
    create: XOR<landownersCreateWithoutUserInput, landownersUncheckedCreateWithoutUserInput>
    where?: landownersWhereInput
  }

  export type landownersUpdateToOneWithWhereWithoutUserInput = {
    where?: landownersWhereInput
    data: XOR<landownersUpdateWithoutUserInput, landownersUncheckedUpdateWithoutUserInput>
  }

  export type landownersUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    lands?: LandsUpdateManyWithoutOwnerNestedInput
  }

  export type landownersUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    lands?: LandsUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type companiesUpsertWithoutUserInput = {
    update: XOR<companiesUpdateWithoutUserInput, companiesUncheckedUpdateWithoutUserInput>
    create: XOR<companiesCreateWithoutUserInput, companiesUncheckedCreateWithoutUserInput>
    where?: companiesWhereInput
  }

  export type companiesUpdateToOneWithWhereWithoutUserInput = {
    where?: companiesWhereInput
    data: XOR<companiesUpdateWithoutUserInput, companiesUncheckedUpdateWithoutUserInput>
  }

  export type companiesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutCompanyNestedInput
  }

  export type companiesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type investorsUpsertWithoutUserInput = {
    update: XOR<investorsUpdateWithoutUserInput, investorsUncheckedUpdateWithoutUserInput>
    create: XOR<investorsCreateWithoutUserInput, investorsUncheckedCreateWithoutUserInput>
    where?: investorsWhereInput
  }

  export type investorsUpdateToOneWithWhereWithoutUserInput = {
    where?: investorsWhereInput
    data: XOR<investorsUpdateWithoutUserInput, investorsUncheckedUpdateWithoutUserInput>
  }

  export type investorsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    invesiments?: InvesimentUpdateManyWithoutInvestorNestedInput
  }

  export type investorsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    invesiments?: InvesimentUncheckedUpdateManyWithoutInvestorNestedInput
  }

  export type landownersCreateWithoutLandsInput = {
    id?: string
    document_id: string
    user: UsersCreateNestedOneWithoutLandOwnerInput
  }

  export type landownersUncheckedCreateWithoutLandsInput = {
    id?: string
    userId: string
    document_id: string
  }

  export type landownersCreateOrConnectWithoutLandsInput = {
    where: landownersWhereUniqueInput
    create: XOR<landownersCreateWithoutLandsInput, landownersUncheckedCreateWithoutLandsInput>
  }

  export type ProjectCreateWithoutLandProjectInput = {
    id?: string
    powerKw: number
    cost: number
    status?: $Enums.StatusApproval
    estimatedReturn: number
    createdAt?: Date | string
    title: string
    description: string
    area: number
    company?: companiesCreateNestedOneWithoutProjectsInput
    investments?: InvesimentCreateNestedManyWithoutProjectInput
    projectsProposal?: projectProposalCreateNestedManyWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutLandProjectInput = {
    id?: string
    companiesId?: string | null
    powerKw: number
    cost: number
    status?: $Enums.StatusApproval
    estimatedReturn: number
    createdAt?: Date | string
    title: string
    description: string
    area: number
    investments?: InvesimentUncheckedCreateNestedManyWithoutProjectInput
    projectsProposal?: projectProposalUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type ProjectCreateOrConnectWithoutLandProjectInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutLandProjectInput, ProjectUncheckedCreateWithoutLandProjectInput>
  }

  export type ProjectCreateManyLandProjectInputEnvelope = {
    data: ProjectCreateManyLandProjectInput | ProjectCreateManyLandProjectInput[]
    skipDuplicates?: boolean
  }

  export type projectProposalCreateWithoutLandsInput = {
    id?: string
    statusProjectProposal?: $Enums.statusProposal
    createdAt?: Date | string
    ownerAgreeProjectProposal?: $Enums.OwnerAgreeProposal
    projects: ProjectCreateNestedOneWithoutProjectsProposalInput
  }

  export type projectProposalUncheckedCreateWithoutLandsInput = {
    id?: string
    projectId: string
    statusProjectProposal?: $Enums.statusProposal
    createdAt?: Date | string
    ownerAgreeProjectProposal?: $Enums.OwnerAgreeProposal
  }

  export type projectProposalCreateOrConnectWithoutLandsInput = {
    where: projectProposalWhereUniqueInput
    create: XOR<projectProposalCreateWithoutLandsInput, projectProposalUncheckedCreateWithoutLandsInput>
  }

  export type projectProposalCreateManyLandsInputEnvelope = {
    data: projectProposalCreateManyLandsInput | projectProposalCreateManyLandsInput[]
    skipDuplicates?: boolean
  }

  export type landownersUpsertWithoutLandsInput = {
    update: XOR<landownersUpdateWithoutLandsInput, landownersUncheckedUpdateWithoutLandsInput>
    create: XOR<landownersCreateWithoutLandsInput, landownersUncheckedCreateWithoutLandsInput>
    where?: landownersWhereInput
  }

  export type landownersUpdateToOneWithWhereWithoutLandsInput = {
    where?: landownersWhereInput
    data: XOR<landownersUpdateWithoutLandsInput, landownersUncheckedUpdateWithoutLandsInput>
  }

  export type landownersUpdateWithoutLandsInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutLandOwnerNestedInput
  }

  export type landownersUncheckedUpdateWithoutLandsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutLandProjectInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutLandProjectInput, ProjectUncheckedUpdateWithoutLandProjectInput>
    create: XOR<ProjectCreateWithoutLandProjectInput, ProjectUncheckedCreateWithoutLandProjectInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutLandProjectInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutLandProjectInput, ProjectUncheckedUpdateWithoutLandProjectInput>
  }

  export type ProjectUpdateManyWithWhereWithoutLandProjectInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutLandProjectInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    projectId?: StringFilter<"Project"> | string
    companiesId?: StringNullableFilter<"Project"> | string | null
    powerKw?: FloatFilter<"Project"> | number
    cost?: FloatFilter<"Project"> | number
    status?: EnumStatusApprovalFilter<"Project"> | $Enums.StatusApproval
    estimatedReturn?: FloatFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    area?: FloatFilter<"Project"> | number
  }

  export type projectProposalUpsertWithWhereUniqueWithoutLandsInput = {
    where: projectProposalWhereUniqueInput
    update: XOR<projectProposalUpdateWithoutLandsInput, projectProposalUncheckedUpdateWithoutLandsInput>
    create: XOR<projectProposalCreateWithoutLandsInput, projectProposalUncheckedCreateWithoutLandsInput>
  }

  export type projectProposalUpdateWithWhereUniqueWithoutLandsInput = {
    where: projectProposalWhereUniqueInput
    data: XOR<projectProposalUpdateWithoutLandsInput, projectProposalUncheckedUpdateWithoutLandsInput>
  }

  export type projectProposalUpdateManyWithWhereWithoutLandsInput = {
    where: projectProposalScalarWhereInput
    data: XOR<projectProposalUpdateManyMutationInput, projectProposalUncheckedUpdateManyWithoutLandsInput>
  }

  export type projectProposalScalarWhereInput = {
    AND?: projectProposalScalarWhereInput | projectProposalScalarWhereInput[]
    OR?: projectProposalScalarWhereInput[]
    NOT?: projectProposalScalarWhereInput | projectProposalScalarWhereInput[]
    id?: StringFilter<"projectProposal"> | string
    projectId?: StringFilter<"projectProposal"> | string
    landsId?: StringFilter<"projectProposal"> | string
    statusProjectProposal?: EnumstatusProposalFilter<"projectProposal"> | $Enums.statusProposal
    createdAt?: DateTimeFilter<"projectProposal"> | Date | string
    ownerAgreeProjectProposal?: EnumOwnerAgreeProposalFilter<"projectProposal"> | $Enums.OwnerAgreeProposal
  }

  export type UsersCreateWithoutLandOwnerInput = {
    id?: string
    name: string
    email: string
    password: string
    user_type: $Enums.UserType
    phone?: string | null
    created_at?: Date | string
    company?: companiesCreateNestedOneWithoutUserInput
    investor?: investorsCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutLandOwnerInput = {
    id?: string
    name: string
    email: string
    password: string
    user_type: $Enums.UserType
    phone?: string | null
    created_at?: Date | string
    company?: companiesUncheckedCreateNestedOneWithoutUserInput
    investor?: investorsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutLandOwnerInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutLandOwnerInput, UsersUncheckedCreateWithoutLandOwnerInput>
  }

  export type LandsCreateWithoutOwnerInput = {
    id?: string
    area: number
    avaliability?: boolean
    street: string
    number: string
    complement: string
    district: string
    city: string
    state: string
    postalCode: string
    country: string
    projects?: ProjectCreateNestedManyWithoutLandProjectInput
    projectsProposal?: projectProposalCreateNestedManyWithoutLandsInput
  }

  export type LandsUncheckedCreateWithoutOwnerInput = {
    id?: string
    area: number
    avaliability?: boolean
    street: string
    number: string
    complement: string
    district: string
    city: string
    state: string
    postalCode: string
    country: string
    projects?: ProjectUncheckedCreateNestedManyWithoutLandProjectInput
    projectsProposal?: projectProposalUncheckedCreateNestedManyWithoutLandsInput
  }

  export type LandsCreateOrConnectWithoutOwnerInput = {
    where: LandsWhereUniqueInput
    create: XOR<LandsCreateWithoutOwnerInput, LandsUncheckedCreateWithoutOwnerInput>
  }

  export type LandsCreateManyOwnerInputEnvelope = {
    data: LandsCreateManyOwnerInput | LandsCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutLandOwnerInput = {
    update: XOR<UsersUpdateWithoutLandOwnerInput, UsersUncheckedUpdateWithoutLandOwnerInput>
    create: XOR<UsersCreateWithoutLandOwnerInput, UsersUncheckedCreateWithoutLandOwnerInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutLandOwnerInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutLandOwnerInput, UsersUncheckedUpdateWithoutLandOwnerInput>
  }

  export type UsersUpdateWithoutLandOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: companiesUpdateOneWithoutUserNestedInput
    investor?: investorsUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutLandOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: companiesUncheckedUpdateOneWithoutUserNestedInput
    investor?: investorsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type LandsUpsertWithWhereUniqueWithoutOwnerInput = {
    where: LandsWhereUniqueInput
    update: XOR<LandsUpdateWithoutOwnerInput, LandsUncheckedUpdateWithoutOwnerInput>
    create: XOR<LandsCreateWithoutOwnerInput, LandsUncheckedCreateWithoutOwnerInput>
  }

  export type LandsUpdateWithWhereUniqueWithoutOwnerInput = {
    where: LandsWhereUniqueInput
    data: XOR<LandsUpdateWithoutOwnerInput, LandsUncheckedUpdateWithoutOwnerInput>
  }

  export type LandsUpdateManyWithWhereWithoutOwnerInput = {
    where: LandsScalarWhereInput
    data: XOR<LandsUpdateManyMutationInput, LandsUncheckedUpdateManyWithoutOwnerInput>
  }

  export type LandsScalarWhereInput = {
    AND?: LandsScalarWhereInput | LandsScalarWhereInput[]
    OR?: LandsScalarWhereInput[]
    NOT?: LandsScalarWhereInput | LandsScalarWhereInput[]
    id?: StringFilter<"Lands"> | string
    ownerId?: StringFilter<"Lands"> | string
    area?: FloatFilter<"Lands"> | number
    avaliability?: BoolFilter<"Lands"> | boolean
    street?: StringFilter<"Lands"> | string
    number?: StringFilter<"Lands"> | string
    complement?: StringFilter<"Lands"> | string
    district?: StringFilter<"Lands"> | string
    city?: StringFilter<"Lands"> | string
    state?: StringFilter<"Lands"> | string
    postalCode?: StringFilter<"Lands"> | string
    country?: StringFilter<"Lands"> | string
  }

  export type UsersCreateWithoutCompanyInput = {
    id?: string
    name: string
    email: string
    password: string
    user_type: $Enums.UserType
    phone?: string | null
    created_at?: Date | string
    landOwner?: landownersCreateNestedOneWithoutUserInput
    investor?: investorsCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    email: string
    password: string
    user_type: $Enums.UserType
    phone?: string | null
    created_at?: Date | string
    landOwner?: landownersUncheckedCreateNestedOneWithoutUserInput
    investor?: investorsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutCompanyInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCompanyInput, UsersUncheckedCreateWithoutCompanyInput>
  }

  export type ProjectCreateWithoutCompanyInput = {
    id?: string
    powerKw: number
    cost: number
    status?: $Enums.StatusApproval
    estimatedReturn: number
    createdAt?: Date | string
    title: string
    description: string
    area: number
    landProject: LandsCreateNestedOneWithoutProjectsInput
    investments?: InvesimentCreateNestedManyWithoutProjectInput
    projectsProposal?: projectProposalCreateNestedManyWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutCompanyInput = {
    id?: string
    projectId: string
    powerKw: number
    cost: number
    status?: $Enums.StatusApproval
    estimatedReturn: number
    createdAt?: Date | string
    title: string
    description: string
    area: number
    investments?: InvesimentUncheckedCreateNestedManyWithoutProjectInput
    projectsProposal?: projectProposalUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type ProjectCreateOrConnectWithoutCompanyInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput>
  }

  export type ProjectCreateManyCompanyInputEnvelope = {
    data: ProjectCreateManyCompanyInput | ProjectCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutCompanyInput = {
    update: XOR<UsersUpdateWithoutCompanyInput, UsersUncheckedUpdateWithoutCompanyInput>
    create: XOR<UsersCreateWithoutCompanyInput, UsersUncheckedCreateWithoutCompanyInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCompanyInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCompanyInput, UsersUncheckedUpdateWithoutCompanyInput>
  }

  export type UsersUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    landOwner?: landownersUpdateOneWithoutUserNestedInput
    investor?: investorsUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    landOwner?: landownersUncheckedUpdateOneWithoutUserNestedInput
    investor?: investorsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ProjectUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutCompanyInput, ProjectUncheckedUpdateWithoutCompanyInput>
    create: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutCompanyInput, ProjectUncheckedUpdateWithoutCompanyInput>
  }

  export type ProjectUpdateManyWithWhereWithoutCompanyInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutCompanyInput>
  }

  export type UsersCreateWithoutInvestorInput = {
    id?: string
    name: string
    email: string
    password: string
    user_type: $Enums.UserType
    phone?: string | null
    created_at?: Date | string
    landOwner?: landownersCreateNestedOneWithoutUserInput
    company?: companiesCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutInvestorInput = {
    id?: string
    name: string
    email: string
    password: string
    user_type: $Enums.UserType
    phone?: string | null
    created_at?: Date | string
    landOwner?: landownersUncheckedCreateNestedOneWithoutUserInput
    company?: companiesUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutInvestorInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutInvestorInput, UsersUncheckedCreateWithoutInvestorInput>
  }

  export type InvesimentCreateWithoutInvestorInput = {
    id?: string
    valueInvested: number
    investedDate?: Date | string
    ownerAgree?: $Enums.OwnerAgree
    compAgree?: $Enums.CompanyAgree
    title: string
    description: string
    status?: $Enums.StatusInvesiment
    project: ProjectCreateNestedOneWithoutInvestmentsInput
  }

  export type InvesimentUncheckedCreateWithoutInvestorInput = {
    id?: string
    projectId: string
    valueInvested: number
    investedDate?: Date | string
    ownerAgree?: $Enums.OwnerAgree
    compAgree?: $Enums.CompanyAgree
    title: string
    description: string
    status?: $Enums.StatusInvesiment
  }

  export type InvesimentCreateOrConnectWithoutInvestorInput = {
    where: InvesimentWhereUniqueInput
    create: XOR<InvesimentCreateWithoutInvestorInput, InvesimentUncheckedCreateWithoutInvestorInput>
  }

  export type InvesimentCreateManyInvestorInputEnvelope = {
    data: InvesimentCreateManyInvestorInput | InvesimentCreateManyInvestorInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutInvestorInput = {
    update: XOR<UsersUpdateWithoutInvestorInput, UsersUncheckedUpdateWithoutInvestorInput>
    create: XOR<UsersCreateWithoutInvestorInput, UsersUncheckedCreateWithoutInvestorInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutInvestorInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutInvestorInput, UsersUncheckedUpdateWithoutInvestorInput>
  }

  export type UsersUpdateWithoutInvestorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    landOwner?: landownersUpdateOneWithoutUserNestedInput
    company?: companiesUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutInvestorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    landOwner?: landownersUncheckedUpdateOneWithoutUserNestedInput
    company?: companiesUncheckedUpdateOneWithoutUserNestedInput
  }

  export type InvesimentUpsertWithWhereUniqueWithoutInvestorInput = {
    where: InvesimentWhereUniqueInput
    update: XOR<InvesimentUpdateWithoutInvestorInput, InvesimentUncheckedUpdateWithoutInvestorInput>
    create: XOR<InvesimentCreateWithoutInvestorInput, InvesimentUncheckedCreateWithoutInvestorInput>
  }

  export type InvesimentUpdateWithWhereUniqueWithoutInvestorInput = {
    where: InvesimentWhereUniqueInput
    data: XOR<InvesimentUpdateWithoutInvestorInput, InvesimentUncheckedUpdateWithoutInvestorInput>
  }

  export type InvesimentUpdateManyWithWhereWithoutInvestorInput = {
    where: InvesimentScalarWhereInput
    data: XOR<InvesimentUpdateManyMutationInput, InvesimentUncheckedUpdateManyWithoutInvestorInput>
  }

  export type InvesimentScalarWhereInput = {
    AND?: InvesimentScalarWhereInput | InvesimentScalarWhereInput[]
    OR?: InvesimentScalarWhereInput[]
    NOT?: InvesimentScalarWhereInput | InvesimentScalarWhereInput[]
    id?: StringFilter<"Invesiment"> | string
    projectId?: StringFilter<"Invesiment"> | string
    investorId?: StringFilter<"Invesiment"> | string
    valueInvested?: FloatFilter<"Invesiment"> | number
    investedDate?: DateTimeFilter<"Invesiment"> | Date | string
    ownerAgree?: EnumOwnerAgreeFilter<"Invesiment"> | $Enums.OwnerAgree
    compAgree?: EnumCompanyAgreeFilter<"Invesiment"> | $Enums.CompanyAgree
    title?: StringFilter<"Invesiment"> | string
    description?: StringFilter<"Invesiment"> | string
    status?: EnumStatusInvesimentFilter<"Invesiment"> | $Enums.StatusInvesiment
  }

  export type LandsCreateWithoutProjectsInput = {
    id?: string
    area: number
    avaliability?: boolean
    street: string
    number: string
    complement: string
    district: string
    city: string
    state: string
    postalCode: string
    country: string
    owner: landownersCreateNestedOneWithoutLandsInput
    projectsProposal?: projectProposalCreateNestedManyWithoutLandsInput
  }

  export type LandsUncheckedCreateWithoutProjectsInput = {
    id?: string
    ownerId: string
    area: number
    avaliability?: boolean
    street: string
    number: string
    complement: string
    district: string
    city: string
    state: string
    postalCode: string
    country: string
    projectsProposal?: projectProposalUncheckedCreateNestedManyWithoutLandsInput
  }

  export type LandsCreateOrConnectWithoutProjectsInput = {
    where: LandsWhereUniqueInput
    create: XOR<LandsCreateWithoutProjectsInput, LandsUncheckedCreateWithoutProjectsInput>
  }

  export type companiesCreateWithoutProjectsInput = {
    id?: string
    document_id: string
    company_name: string
    user: UsersCreateNestedOneWithoutCompanyInput
  }

  export type companiesUncheckedCreateWithoutProjectsInput = {
    id?: string
    userId: string
    document_id: string
    company_name: string
  }

  export type companiesCreateOrConnectWithoutProjectsInput = {
    where: companiesWhereUniqueInput
    create: XOR<companiesCreateWithoutProjectsInput, companiesUncheckedCreateWithoutProjectsInput>
  }

  export type InvesimentCreateWithoutProjectInput = {
    id?: string
    valueInvested: number
    investedDate?: Date | string
    ownerAgree?: $Enums.OwnerAgree
    compAgree?: $Enums.CompanyAgree
    title: string
    description: string
    status?: $Enums.StatusInvesiment
    investor?: investorsCreateNestedOneWithoutInvesimentsInput
  }

  export type InvesimentUncheckedCreateWithoutProjectInput = {
    id?: string
    investorId: string
    valueInvested: number
    investedDate?: Date | string
    ownerAgree?: $Enums.OwnerAgree
    compAgree?: $Enums.CompanyAgree
    title: string
    description: string
    status?: $Enums.StatusInvesiment
  }

  export type InvesimentCreateOrConnectWithoutProjectInput = {
    where: InvesimentWhereUniqueInput
    create: XOR<InvesimentCreateWithoutProjectInput, InvesimentUncheckedCreateWithoutProjectInput>
  }

  export type InvesimentCreateManyProjectInputEnvelope = {
    data: InvesimentCreateManyProjectInput | InvesimentCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type projectProposalCreateWithoutProjectsInput = {
    id?: string
    statusProjectProposal?: $Enums.statusProposal
    createdAt?: Date | string
    ownerAgreeProjectProposal?: $Enums.OwnerAgreeProposal
    lands: LandsCreateNestedOneWithoutProjectsProposalInput
  }

  export type projectProposalUncheckedCreateWithoutProjectsInput = {
    id?: string
    landsId: string
    statusProjectProposal?: $Enums.statusProposal
    createdAt?: Date | string
    ownerAgreeProjectProposal?: $Enums.OwnerAgreeProposal
  }

  export type projectProposalCreateOrConnectWithoutProjectsInput = {
    where: projectProposalWhereUniqueInput
    create: XOR<projectProposalCreateWithoutProjectsInput, projectProposalUncheckedCreateWithoutProjectsInput>
  }

  export type projectProposalCreateManyProjectsInputEnvelope = {
    data: projectProposalCreateManyProjectsInput | projectProposalCreateManyProjectsInput[]
    skipDuplicates?: boolean
  }

  export type LandsUpsertWithoutProjectsInput = {
    update: XOR<LandsUpdateWithoutProjectsInput, LandsUncheckedUpdateWithoutProjectsInput>
    create: XOR<LandsCreateWithoutProjectsInput, LandsUncheckedCreateWithoutProjectsInput>
    where?: LandsWhereInput
  }

  export type LandsUpdateToOneWithWhereWithoutProjectsInput = {
    where?: LandsWhereInput
    data: XOR<LandsUpdateWithoutProjectsInput, LandsUncheckedUpdateWithoutProjectsInput>
  }

  export type LandsUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    avaliability?: BoolFieldUpdateOperationsInput | boolean
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    owner?: landownersUpdateOneRequiredWithoutLandsNestedInput
    projectsProposal?: projectProposalUpdateManyWithoutLandsNestedInput
  }

  export type LandsUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    avaliability?: BoolFieldUpdateOperationsInput | boolean
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    projectsProposal?: projectProposalUncheckedUpdateManyWithoutLandsNestedInput
  }

  export type companiesUpsertWithoutProjectsInput = {
    update: XOR<companiesUpdateWithoutProjectsInput, companiesUncheckedUpdateWithoutProjectsInput>
    create: XOR<companiesCreateWithoutProjectsInput, companiesUncheckedCreateWithoutProjectsInput>
    where?: companiesWhereInput
  }

  export type companiesUpdateToOneWithWhereWithoutProjectsInput = {
    where?: companiesWhereInput
    data: XOR<companiesUpdateWithoutProjectsInput, companiesUncheckedUpdateWithoutProjectsInput>
  }

  export type companiesUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutCompanyNestedInput
  }

  export type companiesUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
  }

  export type InvesimentUpsertWithWhereUniqueWithoutProjectInput = {
    where: InvesimentWhereUniqueInput
    update: XOR<InvesimentUpdateWithoutProjectInput, InvesimentUncheckedUpdateWithoutProjectInput>
    create: XOR<InvesimentCreateWithoutProjectInput, InvesimentUncheckedCreateWithoutProjectInput>
  }

  export type InvesimentUpdateWithWhereUniqueWithoutProjectInput = {
    where: InvesimentWhereUniqueInput
    data: XOR<InvesimentUpdateWithoutProjectInput, InvesimentUncheckedUpdateWithoutProjectInput>
  }

  export type InvesimentUpdateManyWithWhereWithoutProjectInput = {
    where: InvesimentScalarWhereInput
    data: XOR<InvesimentUpdateManyMutationInput, InvesimentUncheckedUpdateManyWithoutProjectInput>
  }

  export type projectProposalUpsertWithWhereUniqueWithoutProjectsInput = {
    where: projectProposalWhereUniqueInput
    update: XOR<projectProposalUpdateWithoutProjectsInput, projectProposalUncheckedUpdateWithoutProjectsInput>
    create: XOR<projectProposalCreateWithoutProjectsInput, projectProposalUncheckedCreateWithoutProjectsInput>
  }

  export type projectProposalUpdateWithWhereUniqueWithoutProjectsInput = {
    where: projectProposalWhereUniqueInput
    data: XOR<projectProposalUpdateWithoutProjectsInput, projectProposalUncheckedUpdateWithoutProjectsInput>
  }

  export type projectProposalUpdateManyWithWhereWithoutProjectsInput = {
    where: projectProposalScalarWhereInput
    data: XOR<projectProposalUpdateManyMutationInput, projectProposalUncheckedUpdateManyWithoutProjectsInput>
  }

  export type ProjectCreateWithoutInvestmentsInput = {
    id?: string
    powerKw: number
    cost: number
    status?: $Enums.StatusApproval
    estimatedReturn: number
    createdAt?: Date | string
    title: string
    description: string
    area: number
    landProject: LandsCreateNestedOneWithoutProjectsInput
    company?: companiesCreateNestedOneWithoutProjectsInput
    projectsProposal?: projectProposalCreateNestedManyWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutInvestmentsInput = {
    id?: string
    projectId: string
    companiesId?: string | null
    powerKw: number
    cost: number
    status?: $Enums.StatusApproval
    estimatedReturn: number
    createdAt?: Date | string
    title: string
    description: string
    area: number
    projectsProposal?: projectProposalUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type ProjectCreateOrConnectWithoutInvestmentsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutInvestmentsInput, ProjectUncheckedCreateWithoutInvestmentsInput>
  }

  export type investorsCreateWithoutInvesimentsInput = {
    id?: string
    document_id: string
    user: UsersCreateNestedOneWithoutInvestorInput
  }

  export type investorsUncheckedCreateWithoutInvesimentsInput = {
    id?: string
    userId: string
    document_id: string
  }

  export type investorsCreateOrConnectWithoutInvesimentsInput = {
    where: investorsWhereUniqueInput
    create: XOR<investorsCreateWithoutInvesimentsInput, investorsUncheckedCreateWithoutInvesimentsInput>
  }

  export type ProjectUpsertWithoutInvestmentsInput = {
    update: XOR<ProjectUpdateWithoutInvestmentsInput, ProjectUncheckedUpdateWithoutInvestmentsInput>
    create: XOR<ProjectCreateWithoutInvestmentsInput, ProjectUncheckedCreateWithoutInvestmentsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutInvestmentsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutInvestmentsInput, ProjectUncheckedUpdateWithoutInvestmentsInput>
  }

  export type ProjectUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    powerKw?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    estimatedReturn?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    landProject?: LandsUpdateOneRequiredWithoutProjectsNestedInput
    company?: companiesUpdateOneWithoutProjectsNestedInput
    projectsProposal?: projectProposalUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    companiesId?: NullableStringFieldUpdateOperationsInput | string | null
    powerKw?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    estimatedReturn?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    projectsProposal?: projectProposalUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type investorsUpsertWithoutInvesimentsInput = {
    update: XOR<investorsUpdateWithoutInvesimentsInput, investorsUncheckedUpdateWithoutInvesimentsInput>
    create: XOR<investorsCreateWithoutInvesimentsInput, investorsUncheckedCreateWithoutInvesimentsInput>
    where?: investorsWhereInput
  }

  export type investorsUpdateToOneWithWhereWithoutInvesimentsInput = {
    where?: investorsWhereInput
    data: XOR<investorsUpdateWithoutInvesimentsInput, investorsUncheckedUpdateWithoutInvesimentsInput>
  }

  export type investorsUpdateWithoutInvesimentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutInvestorNestedInput
  }

  export type investorsUncheckedUpdateWithoutInvesimentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateWithoutProjectsProposalInput = {
    id?: string
    powerKw: number
    cost: number
    status?: $Enums.StatusApproval
    estimatedReturn: number
    createdAt?: Date | string
    title: string
    description: string
    area: number
    landProject: LandsCreateNestedOneWithoutProjectsInput
    company?: companiesCreateNestedOneWithoutProjectsInput
    investments?: InvesimentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutProjectsProposalInput = {
    id?: string
    projectId: string
    companiesId?: string | null
    powerKw: number
    cost: number
    status?: $Enums.StatusApproval
    estimatedReturn: number
    createdAt?: Date | string
    title: string
    description: string
    area: number
    investments?: InvesimentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutProjectsProposalInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProjectsProposalInput, ProjectUncheckedCreateWithoutProjectsProposalInput>
  }

  export type LandsCreateWithoutProjectsProposalInput = {
    id?: string
    area: number
    avaliability?: boolean
    street: string
    number: string
    complement: string
    district: string
    city: string
    state: string
    postalCode: string
    country: string
    owner: landownersCreateNestedOneWithoutLandsInput
    projects?: ProjectCreateNestedManyWithoutLandProjectInput
  }

  export type LandsUncheckedCreateWithoutProjectsProposalInput = {
    id?: string
    ownerId: string
    area: number
    avaliability?: boolean
    street: string
    number: string
    complement: string
    district: string
    city: string
    state: string
    postalCode: string
    country: string
    projects?: ProjectUncheckedCreateNestedManyWithoutLandProjectInput
  }

  export type LandsCreateOrConnectWithoutProjectsProposalInput = {
    where: LandsWhereUniqueInput
    create: XOR<LandsCreateWithoutProjectsProposalInput, LandsUncheckedCreateWithoutProjectsProposalInput>
  }

  export type ProjectUpsertWithoutProjectsProposalInput = {
    update: XOR<ProjectUpdateWithoutProjectsProposalInput, ProjectUncheckedUpdateWithoutProjectsProposalInput>
    create: XOR<ProjectCreateWithoutProjectsProposalInput, ProjectUncheckedCreateWithoutProjectsProposalInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutProjectsProposalInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutProjectsProposalInput, ProjectUncheckedUpdateWithoutProjectsProposalInput>
  }

  export type ProjectUpdateWithoutProjectsProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    powerKw?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    estimatedReturn?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    landProject?: LandsUpdateOneRequiredWithoutProjectsNestedInput
    company?: companiesUpdateOneWithoutProjectsNestedInput
    investments?: InvesimentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutProjectsProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    companiesId?: NullableStringFieldUpdateOperationsInput | string | null
    powerKw?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    estimatedReturn?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    investments?: InvesimentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type LandsUpsertWithoutProjectsProposalInput = {
    update: XOR<LandsUpdateWithoutProjectsProposalInput, LandsUncheckedUpdateWithoutProjectsProposalInput>
    create: XOR<LandsCreateWithoutProjectsProposalInput, LandsUncheckedCreateWithoutProjectsProposalInput>
    where?: LandsWhereInput
  }

  export type LandsUpdateToOneWithWhereWithoutProjectsProposalInput = {
    where?: LandsWhereInput
    data: XOR<LandsUpdateWithoutProjectsProposalInput, LandsUncheckedUpdateWithoutProjectsProposalInput>
  }

  export type LandsUpdateWithoutProjectsProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    avaliability?: BoolFieldUpdateOperationsInput | boolean
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    owner?: landownersUpdateOneRequiredWithoutLandsNestedInput
    projects?: ProjectUpdateManyWithoutLandProjectNestedInput
  }

  export type LandsUncheckedUpdateWithoutProjectsProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    avaliability?: BoolFieldUpdateOperationsInput | boolean
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutLandProjectNestedInput
  }

  export type ProjectCreateManyLandProjectInput = {
    id?: string
    companiesId?: string | null
    powerKw: number
    cost: number
    status?: $Enums.StatusApproval
    estimatedReturn: number
    createdAt?: Date | string
    title: string
    description: string
    area: number
  }

  export type projectProposalCreateManyLandsInput = {
    id?: string
    projectId: string
    statusProjectProposal?: $Enums.statusProposal
    createdAt?: Date | string
    ownerAgreeProjectProposal?: $Enums.OwnerAgreeProposal
  }

  export type ProjectUpdateWithoutLandProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    powerKw?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    estimatedReturn?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    company?: companiesUpdateOneWithoutProjectsNestedInput
    investments?: InvesimentUpdateManyWithoutProjectNestedInput
    projectsProposal?: projectProposalUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutLandProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    companiesId?: NullableStringFieldUpdateOperationsInput | string | null
    powerKw?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    estimatedReturn?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    investments?: InvesimentUncheckedUpdateManyWithoutProjectNestedInput
    projectsProposal?: projectProposalUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutLandProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    companiesId?: NullableStringFieldUpdateOperationsInput | string | null
    powerKw?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    estimatedReturn?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
  }

  export type projectProposalUpdateWithoutLandsInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusProjectProposal?: EnumstatusProposalFieldUpdateOperationsInput | $Enums.statusProposal
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerAgreeProjectProposal?: EnumOwnerAgreeProposalFieldUpdateOperationsInput | $Enums.OwnerAgreeProposal
    projects?: ProjectUpdateOneRequiredWithoutProjectsProposalNestedInput
  }

  export type projectProposalUncheckedUpdateWithoutLandsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    statusProjectProposal?: EnumstatusProposalFieldUpdateOperationsInput | $Enums.statusProposal
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerAgreeProjectProposal?: EnumOwnerAgreeProposalFieldUpdateOperationsInput | $Enums.OwnerAgreeProposal
  }

  export type projectProposalUncheckedUpdateManyWithoutLandsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    statusProjectProposal?: EnumstatusProposalFieldUpdateOperationsInput | $Enums.statusProposal
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerAgreeProjectProposal?: EnumOwnerAgreeProposalFieldUpdateOperationsInput | $Enums.OwnerAgreeProposal
  }

  export type LandsCreateManyOwnerInput = {
    id?: string
    area: number
    avaliability?: boolean
    street: string
    number: string
    complement: string
    district: string
    city: string
    state: string
    postalCode: string
    country: string
  }

  export type LandsUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    avaliability?: BoolFieldUpdateOperationsInput | boolean
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutLandProjectNestedInput
    projectsProposal?: projectProposalUpdateManyWithoutLandsNestedInput
  }

  export type LandsUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    avaliability?: BoolFieldUpdateOperationsInput | boolean
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutLandProjectNestedInput
    projectsProposal?: projectProposalUncheckedUpdateManyWithoutLandsNestedInput
  }

  export type LandsUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    avaliability?: BoolFieldUpdateOperationsInput | boolean
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateManyCompanyInput = {
    id?: string
    projectId: string
    powerKw: number
    cost: number
    status?: $Enums.StatusApproval
    estimatedReturn: number
    createdAt?: Date | string
    title: string
    description: string
    area: number
  }

  export type ProjectUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    powerKw?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    estimatedReturn?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    landProject?: LandsUpdateOneRequiredWithoutProjectsNestedInput
    investments?: InvesimentUpdateManyWithoutProjectNestedInput
    projectsProposal?: projectProposalUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    powerKw?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    estimatedReturn?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
    investments?: InvesimentUncheckedUpdateManyWithoutProjectNestedInput
    projectsProposal?: projectProposalUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    powerKw?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    estimatedReturn?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    area?: FloatFieldUpdateOperationsInput | number
  }

  export type InvesimentCreateManyInvestorInput = {
    id?: string
    projectId: string
    valueInvested: number
    investedDate?: Date | string
    ownerAgree?: $Enums.OwnerAgree
    compAgree?: $Enums.CompanyAgree
    title: string
    description: string
    status?: $Enums.StatusInvesiment
  }

  export type InvesimentUpdateWithoutInvestorInput = {
    id?: StringFieldUpdateOperationsInput | string
    valueInvested?: FloatFieldUpdateOperationsInput | number
    investedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerAgree?: EnumOwnerAgreeFieldUpdateOperationsInput | $Enums.OwnerAgree
    compAgree?: EnumCompanyAgreeFieldUpdateOperationsInput | $Enums.CompanyAgree
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusInvesimentFieldUpdateOperationsInput | $Enums.StatusInvesiment
    project?: ProjectUpdateOneRequiredWithoutInvestmentsNestedInput
  }

  export type InvesimentUncheckedUpdateWithoutInvestorInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    valueInvested?: FloatFieldUpdateOperationsInput | number
    investedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerAgree?: EnumOwnerAgreeFieldUpdateOperationsInput | $Enums.OwnerAgree
    compAgree?: EnumCompanyAgreeFieldUpdateOperationsInput | $Enums.CompanyAgree
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusInvesimentFieldUpdateOperationsInput | $Enums.StatusInvesiment
  }

  export type InvesimentUncheckedUpdateManyWithoutInvestorInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    valueInvested?: FloatFieldUpdateOperationsInput | number
    investedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerAgree?: EnumOwnerAgreeFieldUpdateOperationsInput | $Enums.OwnerAgree
    compAgree?: EnumCompanyAgreeFieldUpdateOperationsInput | $Enums.CompanyAgree
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusInvesimentFieldUpdateOperationsInput | $Enums.StatusInvesiment
  }

  export type InvesimentCreateManyProjectInput = {
    id?: string
    investorId: string
    valueInvested: number
    investedDate?: Date | string
    ownerAgree?: $Enums.OwnerAgree
    compAgree?: $Enums.CompanyAgree
    title: string
    description: string
    status?: $Enums.StatusInvesiment
  }

  export type projectProposalCreateManyProjectsInput = {
    id?: string
    landsId: string
    statusProjectProposal?: $Enums.statusProposal
    createdAt?: Date | string
    ownerAgreeProjectProposal?: $Enums.OwnerAgreeProposal
  }

  export type InvesimentUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    valueInvested?: FloatFieldUpdateOperationsInput | number
    investedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerAgree?: EnumOwnerAgreeFieldUpdateOperationsInput | $Enums.OwnerAgree
    compAgree?: EnumCompanyAgreeFieldUpdateOperationsInput | $Enums.CompanyAgree
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusInvesimentFieldUpdateOperationsInput | $Enums.StatusInvesiment
    investor?: investorsUpdateOneWithoutInvesimentsNestedInput
  }

  export type InvesimentUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    investorId?: StringFieldUpdateOperationsInput | string
    valueInvested?: FloatFieldUpdateOperationsInput | number
    investedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerAgree?: EnumOwnerAgreeFieldUpdateOperationsInput | $Enums.OwnerAgree
    compAgree?: EnumCompanyAgreeFieldUpdateOperationsInput | $Enums.CompanyAgree
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusInvesimentFieldUpdateOperationsInput | $Enums.StatusInvesiment
  }

  export type InvesimentUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    investorId?: StringFieldUpdateOperationsInput | string
    valueInvested?: FloatFieldUpdateOperationsInput | number
    investedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerAgree?: EnumOwnerAgreeFieldUpdateOperationsInput | $Enums.OwnerAgree
    compAgree?: EnumCompanyAgreeFieldUpdateOperationsInput | $Enums.CompanyAgree
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusInvesimentFieldUpdateOperationsInput | $Enums.StatusInvesiment
  }

  export type projectProposalUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusProjectProposal?: EnumstatusProposalFieldUpdateOperationsInput | $Enums.statusProposal
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerAgreeProjectProposal?: EnumOwnerAgreeProposalFieldUpdateOperationsInput | $Enums.OwnerAgreeProposal
    lands?: LandsUpdateOneRequiredWithoutProjectsProposalNestedInput
  }

  export type projectProposalUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    landsId?: StringFieldUpdateOperationsInput | string
    statusProjectProposal?: EnumstatusProposalFieldUpdateOperationsInput | $Enums.statusProposal
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerAgreeProjectProposal?: EnumOwnerAgreeProposalFieldUpdateOperationsInput | $Enums.OwnerAgreeProposal
  }

  export type projectProposalUncheckedUpdateManyWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    landsId?: StringFieldUpdateOperationsInput | string
    statusProjectProposal?: EnumstatusProposalFieldUpdateOperationsInput | $Enums.statusProposal
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerAgreeProjectProposal?: EnumOwnerAgreeProposalFieldUpdateOperationsInput | $Enums.OwnerAgreeProposal
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}