
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Asset
 * 
 */
export type Asset = {
  id: string
  name: string
  path: string
  mime: string
  size: number
  created: Date
}

/**
 * Model Banner
 * 
 */
export type Banner = {
  id: string
  path: string
  width: number
  height: number
  assetId: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Assets
 * const assets = await prisma.asset.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Assets
   * const assets = await prisma.asset.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.asset`: Exposes CRUD operations for the **Asset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assets
    * const assets = await prisma.asset.findMany()
    * ```
    */
  get asset(): Prisma.AssetDelegate<GlobalReject>;

  /**
   * `prisma.banner`: Exposes CRUD operations for the **Banner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banners
    * const banners = await prisma.banner.findMany()
    * ```
    */
  get banner(): Prisma.BannerDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.1.0
   * Query Engine version: 8d8414deb360336e4698a65aa45a1fbaf1ce13d8
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Asset: 'Asset',
    Banner: 'Banner'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AssetCountOutputType
   */


  export type AssetCountOutputType = {
    Banner: number
  }

  export type AssetCountOutputTypeSelect = {
    Banner?: boolean
  }

  export type AssetCountOutputTypeGetPayload<
    S extends boolean | null | undefined | AssetCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? AssetCountOutputType
    : S extends undefined
    ? never
    : S extends AssetCountOutputTypeArgs
    ?'include' extends U
    ? AssetCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof AssetCountOutputType ? AssetCountOutputType[P] : never
  } 
    : AssetCountOutputType
  : AssetCountOutputType




  // Custom InputTypes

  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AssetCountOutputType
     * 
    **/
    select?: AssetCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Asset
   */


  export type AggregateAsset = {
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  export type AssetAvgAggregateOutputType = {
    size: number | null
  }

  export type AssetSumAggregateOutputType = {
    size: number | null
  }

  export type AssetMinAggregateOutputType = {
    id: string | null
    name: string | null
    path: string | null
    mime: string | null
    size: number | null
    created: Date | null
  }

  export type AssetMaxAggregateOutputType = {
    id: string | null
    name: string | null
    path: string | null
    mime: string | null
    size: number | null
    created: Date | null
  }

  export type AssetCountAggregateOutputType = {
    id: number
    name: number
    path: number
    mime: number
    size: number
    created: number
    _all: number
  }


  export type AssetAvgAggregateInputType = {
    size?: true
  }

  export type AssetSumAggregateInputType = {
    size?: true
  }

  export type AssetMinAggregateInputType = {
    id?: true
    name?: true
    path?: true
    mime?: true
    size?: true
    created?: true
  }

  export type AssetMaxAggregateInputType = {
    id?: true
    name?: true
    path?: true
    mime?: true
    size?: true
    created?: true
  }

  export type AssetCountAggregateInputType = {
    id?: true
    name?: true
    path?: true
    mime?: true
    size?: true
    created?: true
    _all?: true
  }

  export type AssetAggregateArgs = {
    /**
     * Filter which Asset to aggregate.
     * 
    **/
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     * 
    **/
    orderBy?: Enumerable<AssetOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assets
    **/
    _count?: true | AssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetMaxAggregateInputType
  }

  export type GetAssetAggregateType<T extends AssetAggregateArgs> = {
        [P in keyof T & keyof AggregateAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsset[P]>
      : GetScalarType<T[P], AggregateAsset[P]>
  }




  export type AssetGroupByArgs = {
    where?: AssetWhereInput
    orderBy?: Enumerable<AssetOrderByWithAggregationInput>
    by: Array<AssetScalarFieldEnum>
    having?: AssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetCountAggregateInputType | true
    _avg?: AssetAvgAggregateInputType
    _sum?: AssetSumAggregateInputType
    _min?: AssetMinAggregateInputType
    _max?: AssetMaxAggregateInputType
  }


  export type AssetGroupByOutputType = {
    id: string
    name: string
    path: string
    mime: string
    size: number
    created: Date
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  type GetAssetGroupByPayload<T extends AssetGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetGroupByOutputType[P]>
            : GetScalarType<T[P], AssetGroupByOutputType[P]>
        }
      >
    >


  export type AssetSelect = {
    id?: boolean
    name?: boolean
    path?: boolean
    mime?: boolean
    size?: boolean
    created?: boolean
    Banner?: boolean | BannerFindManyArgs
    _count?: boolean | AssetCountOutputTypeArgs
  }

  export type AssetInclude = {
    Banner?: boolean | BannerFindManyArgs
    _count?: boolean | AssetCountOutputTypeArgs
  }

  export type AssetGetPayload<
    S extends boolean | null | undefined | AssetArgs,
    U = keyof S
      > = S extends true
        ? Asset
    : S extends undefined
    ? never
    : S extends AssetArgs | AssetFindManyArgs
    ?'include' extends U
    ? Asset  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Banner' ? Array < BannerGetPayload<S['include'][P]>>  :
        P extends '_count' ? AssetCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Banner' ? Array < BannerGetPayload<S['select'][P]>>  :
        P extends '_count' ? AssetCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Asset ? Asset[P] : never
  } 
    : Asset
  : Asset


  type AssetCountArgs = Merge<
    Omit<AssetFindManyArgs, 'select' | 'include'> & {
      select?: AssetCountAggregateInputType | true
    }
  >

  export interface AssetDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Asset that matches the filter.
     * @param {AssetFindUniqueArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AssetFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AssetFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Asset'> extends True ? CheckSelect<T, Prisma__AssetClient<Asset>, Prisma__AssetClient<AssetGetPayload<T>>> : CheckSelect<T, Prisma__AssetClient<Asset | null >, Prisma__AssetClient<AssetGetPayload<T> | null >>

    /**
     * Find the first Asset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AssetFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AssetFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Asset'> extends True ? CheckSelect<T, Prisma__AssetClient<Asset>, Prisma__AssetClient<AssetGetPayload<T>>> : CheckSelect<T, Prisma__AssetClient<Asset | null >, Prisma__AssetClient<AssetGetPayload<T> | null >>

    /**
     * Find zero or more Assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assets
     * const assets = await prisma.asset.findMany()
     * 
     * // Get first 10 Assets
     * const assets = await prisma.asset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetWithIdOnly = await prisma.asset.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AssetFindManyArgs>(
      args?: SelectSubset<T, AssetFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Asset>>, PrismaPromise<Array<AssetGetPayload<T>>>>

    /**
     * Create a Asset.
     * @param {AssetCreateArgs} args - Arguments to create a Asset.
     * @example
     * // Create one Asset
     * const Asset = await prisma.asset.create({
     *   data: {
     *     // ... data to create a Asset
     *   }
     * })
     * 
    **/
    create<T extends AssetCreateArgs>(
      args: SelectSubset<T, AssetCreateArgs>
    ): CheckSelect<T, Prisma__AssetClient<Asset>, Prisma__AssetClient<AssetGetPayload<T>>>

    /**
     * Create many Assets.
     *     @param {AssetCreateManyArgs} args - Arguments to create many Assets.
     *     @example
     *     // Create many Assets
     *     const asset = await prisma.asset.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AssetCreateManyArgs>(
      args?: SelectSubset<T, AssetCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Asset.
     * @param {AssetDeleteArgs} args - Arguments to delete one Asset.
     * @example
     * // Delete one Asset
     * const Asset = await prisma.asset.delete({
     *   where: {
     *     // ... filter to delete one Asset
     *   }
     * })
     * 
    **/
    delete<T extends AssetDeleteArgs>(
      args: SelectSubset<T, AssetDeleteArgs>
    ): CheckSelect<T, Prisma__AssetClient<Asset>, Prisma__AssetClient<AssetGetPayload<T>>>

    /**
     * Update one Asset.
     * @param {AssetUpdateArgs} args - Arguments to update one Asset.
     * @example
     * // Update one Asset
     * const asset = await prisma.asset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AssetUpdateArgs>(
      args: SelectSubset<T, AssetUpdateArgs>
    ): CheckSelect<T, Prisma__AssetClient<Asset>, Prisma__AssetClient<AssetGetPayload<T>>>

    /**
     * Delete zero or more Assets.
     * @param {AssetDeleteManyArgs} args - Arguments to filter Assets to delete.
     * @example
     * // Delete a few Assets
     * const { count } = await prisma.asset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AssetDeleteManyArgs>(
      args?: SelectSubset<T, AssetDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AssetUpdateManyArgs>(
      args: SelectSubset<T, AssetUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Asset.
     * @param {AssetUpsertArgs} args - Arguments to update or create a Asset.
     * @example
     * // Update or create a Asset
     * const asset = await prisma.asset.upsert({
     *   create: {
     *     // ... data to create a Asset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asset we want to update
     *   }
     * })
    **/
    upsert<T extends AssetUpsertArgs>(
      args: SelectSubset<T, AssetUpsertArgs>
    ): CheckSelect<T, Prisma__AssetClient<Asset>, Prisma__AssetClient<AssetGetPayload<T>>>

    /**
     * Find one Asset that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {AssetFindUniqueOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AssetFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AssetFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__AssetClient<Asset>, Prisma__AssetClient<AssetGetPayload<T>>>

    /**
     * Find the first Asset that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AssetFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AssetFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__AssetClient<Asset>, Prisma__AssetClient<AssetGetPayload<T>>>

    /**
     * Count the number of Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCountArgs} args - Arguments to filter Assets to count.
     * @example
     * // Count the number of Assets
     * const count = await prisma.asset.count({
     *   where: {
     *     // ... the filter for the Assets we want to count
     *   }
     * })
    **/
    count<T extends AssetCountArgs>(
      args?: Subset<T, AssetCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssetAggregateArgs>(args: Subset<T, AssetAggregateArgs>): PrismaPromise<GetAssetAggregateType<T>>

    /**
     * Group by Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetGroupByArgs} args - Group by arguments.
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
      T extends AssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetGroupByArgs['orderBy'] }
        : { orderBy?: AssetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AssetClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Banner<T extends BannerFindManyArgs = {}>(args?: Subset<T, BannerFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Banner>>, PrismaPromise<Array<BannerGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Asset base type for findUnique actions
   */
  export type AssetFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Asset
     * 
    **/
    select?: AssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AssetInclude | null
    /**
     * Filter, which Asset to fetch.
     * 
    **/
    where: AssetWhereUniqueInput
  }

  /**
   * Asset: findUnique
   */
  export interface AssetFindUniqueArgs extends AssetFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Asset base type for findFirst actions
   */
  export type AssetFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Asset
     * 
    **/
    select?: AssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AssetInclude | null
    /**
     * Filter, which Asset to fetch.
     * 
    **/
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     * 
    **/
    orderBy?: Enumerable<AssetOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     * 
    **/
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     * 
    **/
    distinct?: Enumerable<AssetScalarFieldEnum>
  }

  /**
   * Asset: findFirst
   */
  export interface AssetFindFirstArgs extends AssetFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Asset findMany
   */
  export type AssetFindManyArgs = {
    /**
     * Select specific fields to fetch from the Asset
     * 
    **/
    select?: AssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AssetInclude | null
    /**
     * Filter, which Assets to fetch.
     * 
    **/
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     * 
    **/
    orderBy?: Enumerable<AssetOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assets.
     * 
    **/
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AssetScalarFieldEnum>
  }


  /**
   * Asset create
   */
  export type AssetCreateArgs = {
    /**
     * Select specific fields to fetch from the Asset
     * 
    **/
    select?: AssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AssetInclude | null
    /**
     * The data needed to create a Asset.
     * 
    **/
    data: XOR<AssetCreateInput, AssetUncheckedCreateInput>
  }


  /**
   * Asset createMany
   */
  export type AssetCreateManyArgs = {
    /**
     * The data used to create many Assets.
     * 
    **/
    data: Enumerable<AssetCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Asset update
   */
  export type AssetUpdateArgs = {
    /**
     * Select specific fields to fetch from the Asset
     * 
    **/
    select?: AssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AssetInclude | null
    /**
     * The data needed to update a Asset.
     * 
    **/
    data: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
    /**
     * Choose, which Asset to update.
     * 
    **/
    where: AssetWhereUniqueInput
  }


  /**
   * Asset updateMany
   */
  export type AssetUpdateManyArgs = {
    /**
     * The data used to update Assets.
     * 
    **/
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     * 
    **/
    where?: AssetWhereInput
  }


  /**
   * Asset upsert
   */
  export type AssetUpsertArgs = {
    /**
     * Select specific fields to fetch from the Asset
     * 
    **/
    select?: AssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AssetInclude | null
    /**
     * The filter to search for the Asset to update in case it exists.
     * 
    **/
    where: AssetWhereUniqueInput
    /**
     * In case the Asset found by the `where` argument doesn't exist, create a new Asset with this data.
     * 
    **/
    create: XOR<AssetCreateInput, AssetUncheckedCreateInput>
    /**
     * In case the Asset was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
  }


  /**
   * Asset delete
   */
  export type AssetDeleteArgs = {
    /**
     * Select specific fields to fetch from the Asset
     * 
    **/
    select?: AssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AssetInclude | null
    /**
     * Filter which Asset to delete.
     * 
    **/
    where: AssetWhereUniqueInput
  }


  /**
   * Asset deleteMany
   */
  export type AssetDeleteManyArgs = {
    /**
     * Filter which Assets to delete
     * 
    **/
    where?: AssetWhereInput
  }


  /**
   * Asset: findUniqueOrThrow
   */
  export type AssetFindUniqueOrThrowArgs = AssetFindUniqueArgsBase
      

  /**
   * Asset: findFirstOrThrow
   */
  export type AssetFindFirstOrThrowArgs = AssetFindFirstArgsBase
      

  /**
   * Asset without action
   */
  export type AssetArgs = {
    /**
     * Select specific fields to fetch from the Asset
     * 
    **/
    select?: AssetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AssetInclude | null
  }



  /**
   * Model Banner
   */


  export type AggregateBanner = {
    _count: BannerCountAggregateOutputType | null
    _avg: BannerAvgAggregateOutputType | null
    _sum: BannerSumAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  export type BannerAvgAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type BannerSumAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type BannerMinAggregateOutputType = {
    id: string | null
    path: string | null
    width: number | null
    height: number | null
    assetId: string | null
  }

  export type BannerMaxAggregateOutputType = {
    id: string | null
    path: string | null
    width: number | null
    height: number | null
    assetId: string | null
  }

  export type BannerCountAggregateOutputType = {
    id: number
    path: number
    width: number
    height: number
    assetId: number
    _all: number
  }


  export type BannerAvgAggregateInputType = {
    width?: true
    height?: true
  }

  export type BannerSumAggregateInputType = {
    width?: true
    height?: true
  }

  export type BannerMinAggregateInputType = {
    id?: true
    path?: true
    width?: true
    height?: true
    assetId?: true
  }

  export type BannerMaxAggregateInputType = {
    id?: true
    path?: true
    width?: true
    height?: true
    assetId?: true
  }

  export type BannerCountAggregateInputType = {
    id?: true
    path?: true
    width?: true
    height?: true
    assetId?: true
    _all?: true
  }

  export type BannerAggregateArgs = {
    /**
     * Filter which Banner to aggregate.
     * 
    **/
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     * 
    **/
    orderBy?: Enumerable<BannerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Banners
    **/
    _count?: true | BannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BannerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BannerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BannerMaxAggregateInputType
  }

  export type GetBannerAggregateType<T extends BannerAggregateArgs> = {
        [P in keyof T & keyof AggregateBanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanner[P]>
      : GetScalarType<T[P], AggregateBanner[P]>
  }




  export type BannerGroupByArgs = {
    where?: BannerWhereInput
    orderBy?: Enumerable<BannerOrderByWithAggregationInput>
    by: Array<BannerScalarFieldEnum>
    having?: BannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BannerCountAggregateInputType | true
    _avg?: BannerAvgAggregateInputType
    _sum?: BannerSumAggregateInputType
    _min?: BannerMinAggregateInputType
    _max?: BannerMaxAggregateInputType
  }


  export type BannerGroupByOutputType = {
    id: string
    path: string
    width: number
    height: number
    assetId: string
    _count: BannerCountAggregateOutputType | null
    _avg: BannerAvgAggregateOutputType | null
    _sum: BannerSumAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  type GetBannerGroupByPayload<T extends BannerGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BannerGroupByOutputType[P]>
            : GetScalarType<T[P], BannerGroupByOutputType[P]>
        }
      >
    >


  export type BannerSelect = {
    id?: boolean
    path?: boolean
    width?: boolean
    height?: boolean
    asset?: boolean | AssetArgs
    assetId?: boolean
  }

  export type BannerInclude = {
    asset?: boolean | AssetArgs
  }

  export type BannerGetPayload<
    S extends boolean | null | undefined | BannerArgs,
    U = keyof S
      > = S extends true
        ? Banner
    : S extends undefined
    ? never
    : S extends BannerArgs | BannerFindManyArgs
    ?'include' extends U
    ? Banner  & {
    [P in TrueKeys<S['include']>]:
        P extends 'asset' ? AssetGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'asset' ? AssetGetPayload<S['select'][P]> :  P extends keyof Banner ? Banner[P] : never
  } 
    : Banner
  : Banner


  type BannerCountArgs = Merge<
    Omit<BannerFindManyArgs, 'select' | 'include'> & {
      select?: BannerCountAggregateInputType | true
    }
  >

  export interface BannerDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Banner that matches the filter.
     * @param {BannerFindUniqueArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BannerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BannerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Banner'> extends True ? CheckSelect<T, Prisma__BannerClient<Banner>, Prisma__BannerClient<BannerGetPayload<T>>> : CheckSelect<T, Prisma__BannerClient<Banner | null >, Prisma__BannerClient<BannerGetPayload<T> | null >>

    /**
     * Find the first Banner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BannerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BannerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Banner'> extends True ? CheckSelect<T, Prisma__BannerClient<Banner>, Prisma__BannerClient<BannerGetPayload<T>>> : CheckSelect<T, Prisma__BannerClient<Banner | null >, Prisma__BannerClient<BannerGetPayload<T> | null >>

    /**
     * Find zero or more Banners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banners
     * const banners = await prisma.banner.findMany()
     * 
     * // Get first 10 Banners
     * const banners = await prisma.banner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bannerWithIdOnly = await prisma.banner.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BannerFindManyArgs>(
      args?: SelectSubset<T, BannerFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Banner>>, PrismaPromise<Array<BannerGetPayload<T>>>>

    /**
     * Create a Banner.
     * @param {BannerCreateArgs} args - Arguments to create a Banner.
     * @example
     * // Create one Banner
     * const Banner = await prisma.banner.create({
     *   data: {
     *     // ... data to create a Banner
     *   }
     * })
     * 
    **/
    create<T extends BannerCreateArgs>(
      args: SelectSubset<T, BannerCreateArgs>
    ): CheckSelect<T, Prisma__BannerClient<Banner>, Prisma__BannerClient<BannerGetPayload<T>>>

    /**
     * Create many Banners.
     *     @param {BannerCreateManyArgs} args - Arguments to create many Banners.
     *     @example
     *     // Create many Banners
     *     const banner = await prisma.banner.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BannerCreateManyArgs>(
      args?: SelectSubset<T, BannerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Banner.
     * @param {BannerDeleteArgs} args - Arguments to delete one Banner.
     * @example
     * // Delete one Banner
     * const Banner = await prisma.banner.delete({
     *   where: {
     *     // ... filter to delete one Banner
     *   }
     * })
     * 
    **/
    delete<T extends BannerDeleteArgs>(
      args: SelectSubset<T, BannerDeleteArgs>
    ): CheckSelect<T, Prisma__BannerClient<Banner>, Prisma__BannerClient<BannerGetPayload<T>>>

    /**
     * Update one Banner.
     * @param {BannerUpdateArgs} args - Arguments to update one Banner.
     * @example
     * // Update one Banner
     * const banner = await prisma.banner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BannerUpdateArgs>(
      args: SelectSubset<T, BannerUpdateArgs>
    ): CheckSelect<T, Prisma__BannerClient<Banner>, Prisma__BannerClient<BannerGetPayload<T>>>

    /**
     * Delete zero or more Banners.
     * @param {BannerDeleteManyArgs} args - Arguments to filter Banners to delete.
     * @example
     * // Delete a few Banners
     * const { count } = await prisma.banner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BannerDeleteManyArgs>(
      args?: SelectSubset<T, BannerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BannerUpdateManyArgs>(
      args: SelectSubset<T, BannerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Banner.
     * @param {BannerUpsertArgs} args - Arguments to update or create a Banner.
     * @example
     * // Update or create a Banner
     * const banner = await prisma.banner.upsert({
     *   create: {
     *     // ... data to create a Banner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banner we want to update
     *   }
     * })
    **/
    upsert<T extends BannerUpsertArgs>(
      args: SelectSubset<T, BannerUpsertArgs>
    ): CheckSelect<T, Prisma__BannerClient<Banner>, Prisma__BannerClient<BannerGetPayload<T>>>

    /**
     * Find one Banner that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {BannerFindUniqueOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BannerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BannerFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__BannerClient<Banner>, Prisma__BannerClient<BannerGetPayload<T>>>

    /**
     * Find the first Banner that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BannerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BannerFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__BannerClient<Banner>, Prisma__BannerClient<BannerGetPayload<T>>>

    /**
     * Count the number of Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerCountArgs} args - Arguments to filter Banners to count.
     * @example
     * // Count the number of Banners
     * const count = await prisma.banner.count({
     *   where: {
     *     // ... the filter for the Banners we want to count
     *   }
     * })
    **/
    count<T extends BannerCountArgs>(
      args?: Subset<T, BannerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BannerAggregateArgs>(args: Subset<T, BannerAggregateArgs>): PrismaPromise<GetBannerAggregateType<T>>

    /**
     * Group by Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerGroupByArgs} args - Group by arguments.
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
      T extends BannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BannerGroupByArgs['orderBy'] }
        : { orderBy?: BannerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBannerGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Banner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BannerClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    asset<T extends AssetArgs = {}>(args?: Subset<T, AssetArgs>): CheckSelect<T, Prisma__AssetClient<Asset | null >, Prisma__AssetClient<AssetGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Banner base type for findUnique actions
   */
  export type BannerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Banner
     * 
    **/
    select?: BannerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BannerInclude | null
    /**
     * Filter, which Banner to fetch.
     * 
    **/
    where: BannerWhereUniqueInput
  }

  /**
   * Banner: findUnique
   */
  export interface BannerFindUniqueArgs extends BannerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Banner base type for findFirst actions
   */
  export type BannerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Banner
     * 
    **/
    select?: BannerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BannerInclude | null
    /**
     * Filter, which Banner to fetch.
     * 
    **/
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     * 
    **/
    orderBy?: Enumerable<BannerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     * 
    **/
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     * 
    **/
    distinct?: Enumerable<BannerScalarFieldEnum>
  }

  /**
   * Banner: findFirst
   */
  export interface BannerFindFirstArgs extends BannerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Banner findMany
   */
  export type BannerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Banner
     * 
    **/
    select?: BannerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BannerInclude | null
    /**
     * Filter, which Banners to fetch.
     * 
    **/
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     * 
    **/
    orderBy?: Enumerable<BannerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Banners.
     * 
    **/
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BannerScalarFieldEnum>
  }


  /**
   * Banner create
   */
  export type BannerCreateArgs = {
    /**
     * Select specific fields to fetch from the Banner
     * 
    **/
    select?: BannerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BannerInclude | null
    /**
     * The data needed to create a Banner.
     * 
    **/
    data: XOR<BannerCreateInput, BannerUncheckedCreateInput>
  }


  /**
   * Banner createMany
   */
  export type BannerCreateManyArgs = {
    /**
     * The data used to create many Banners.
     * 
    **/
    data: Enumerable<BannerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Banner update
   */
  export type BannerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Banner
     * 
    **/
    select?: BannerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BannerInclude | null
    /**
     * The data needed to update a Banner.
     * 
    **/
    data: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
    /**
     * Choose, which Banner to update.
     * 
    **/
    where: BannerWhereUniqueInput
  }


  /**
   * Banner updateMany
   */
  export type BannerUpdateManyArgs = {
    /**
     * The data used to update Banners.
     * 
    **/
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyInput>
    /**
     * Filter which Banners to update
     * 
    **/
    where?: BannerWhereInput
  }


  /**
   * Banner upsert
   */
  export type BannerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Banner
     * 
    **/
    select?: BannerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BannerInclude | null
    /**
     * The filter to search for the Banner to update in case it exists.
     * 
    **/
    where: BannerWhereUniqueInput
    /**
     * In case the Banner found by the `where` argument doesn't exist, create a new Banner with this data.
     * 
    **/
    create: XOR<BannerCreateInput, BannerUncheckedCreateInput>
    /**
     * In case the Banner was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
  }


  /**
   * Banner delete
   */
  export type BannerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Banner
     * 
    **/
    select?: BannerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BannerInclude | null
    /**
     * Filter which Banner to delete.
     * 
    **/
    where: BannerWhereUniqueInput
  }


  /**
   * Banner deleteMany
   */
  export type BannerDeleteManyArgs = {
    /**
     * Filter which Banners to delete
     * 
    **/
    where?: BannerWhereInput
  }


  /**
   * Banner: findUniqueOrThrow
   */
  export type BannerFindUniqueOrThrowArgs = BannerFindUniqueArgsBase
      

  /**
   * Banner: findFirstOrThrow
   */
  export type BannerFindFirstOrThrowArgs = BannerFindFirstArgsBase
      

  /**
   * Banner without action
   */
  export type BannerArgs = {
    /**
     * Select specific fields to fetch from the Banner
     * 
    **/
    select?: BannerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BannerInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AssetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    path: 'path',
    mime: 'mime',
    size: 'size',
    created: 'created'
  };

  export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum]


  export const BannerScalarFieldEnum: {
    id: 'id',
    path: 'path',
    width: 'width',
    height: 'height',
    assetId: 'assetId'
  };

  export type BannerScalarFieldEnum = (typeof BannerScalarFieldEnum)[keyof typeof BannerScalarFieldEnum]


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


  /**
   * Deep Input Types
   */


  export type AssetWhereInput = {
    AND?: Enumerable<AssetWhereInput>
    OR?: Enumerable<AssetWhereInput>
    NOT?: Enumerable<AssetWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    path?: StringFilter | string
    mime?: StringFilter | string
    size?: IntFilter | number
    created?: DateTimeFilter | Date | string
    Banner?: BannerListRelationFilter
  }

  export type AssetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    mime?: SortOrder
    size?: SortOrder
    created?: SortOrder
    Banner?: BannerOrderByRelationAggregateInput
  }

  export type AssetWhereUniqueInput = {
    id?: string
  }

  export type AssetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    mime?: SortOrder
    size?: SortOrder
    created?: SortOrder
    _count?: AssetCountOrderByAggregateInput
    _avg?: AssetAvgOrderByAggregateInput
    _max?: AssetMaxOrderByAggregateInput
    _min?: AssetMinOrderByAggregateInput
    _sum?: AssetSumOrderByAggregateInput
  }

  export type AssetScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AssetScalarWhereWithAggregatesInput>
    OR?: Enumerable<AssetScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AssetScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    path?: StringWithAggregatesFilter | string
    mime?: StringWithAggregatesFilter | string
    size?: IntWithAggregatesFilter | number
    created?: DateTimeWithAggregatesFilter | Date | string
  }

  export type BannerWhereInput = {
    AND?: Enumerable<BannerWhereInput>
    OR?: Enumerable<BannerWhereInput>
    NOT?: Enumerable<BannerWhereInput>
    id?: StringFilter | string
    path?: StringFilter | string
    width?: IntFilter | number
    height?: IntFilter | number
    asset?: XOR<AssetRelationFilter, AssetWhereInput>
    assetId?: StringFilter | string
  }

  export type BannerOrderByWithRelationInput = {
    id?: SortOrder
    path?: SortOrder
    width?: SortOrder
    height?: SortOrder
    asset?: AssetOrderByWithRelationInput
    assetId?: SortOrder
  }

  export type BannerWhereUniqueInput = {
    id?: string
  }

  export type BannerOrderByWithAggregationInput = {
    id?: SortOrder
    path?: SortOrder
    width?: SortOrder
    height?: SortOrder
    assetId?: SortOrder
    _count?: BannerCountOrderByAggregateInput
    _avg?: BannerAvgOrderByAggregateInput
    _max?: BannerMaxOrderByAggregateInput
    _min?: BannerMinOrderByAggregateInput
    _sum?: BannerSumOrderByAggregateInput
  }

  export type BannerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BannerScalarWhereWithAggregatesInput>
    OR?: Enumerable<BannerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BannerScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    path?: StringWithAggregatesFilter | string
    width?: IntWithAggregatesFilter | number
    height?: IntWithAggregatesFilter | number
    assetId?: StringWithAggregatesFilter | string
  }

  export type AssetCreateInput = {
    id?: string
    name: string
    path: string
    mime: string
    size: number
    created?: Date | string
    Banner?: BannerCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateInput = {
    id?: string
    name: string
    path: string
    mime: string
    size: number
    created?: Date | string
    Banner?: BannerUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mime?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    Banner?: BannerUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mime?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    Banner?: BannerUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetCreateManyInput = {
    id?: string
    name: string
    path: string
    mime: string
    size: number
    created?: Date | string
  }

  export type AssetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mime?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mime?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerCreateInput = {
    id?: string
    path: string
    width: number
    height: number
    asset: AssetCreateNestedOneWithoutBannerInput
  }

  export type BannerUncheckedCreateInput = {
    id?: string
    path: string
    width: number
    height: number
    assetId: string
  }

  export type BannerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    asset?: AssetUpdateOneRequiredWithoutBannerNestedInput
  }

  export type BannerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    assetId?: StringFieldUpdateOperationsInput | string
  }

  export type BannerCreateManyInput = {
    id?: string
    path: string
    width: number
    height: number
    assetId: string
  }

  export type BannerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
  }

  export type BannerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    assetId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type BannerListRelationFilter = {
    every?: BannerWhereInput
    some?: BannerWhereInput
    none?: BannerWhereInput
  }

  export type BannerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    mime?: SortOrder
    size?: SortOrder
    created?: SortOrder
  }

  export type AssetAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type AssetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    mime?: SortOrder
    size?: SortOrder
    created?: SortOrder
  }

  export type AssetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    mime?: SortOrder
    size?: SortOrder
    created?: SortOrder
  }

  export type AssetSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type AssetRelationFilter = {
    is?: AssetWhereInput
    isNot?: AssetWhereInput
  }

  export type BannerCountOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    width?: SortOrder
    height?: SortOrder
    assetId?: SortOrder
  }

  export type BannerAvgOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
  }

  export type BannerMaxOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    width?: SortOrder
    height?: SortOrder
    assetId?: SortOrder
  }

  export type BannerMinOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    width?: SortOrder
    height?: SortOrder
    assetId?: SortOrder
  }

  export type BannerSumOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
  }

  export type BannerCreateNestedManyWithoutAssetInput = {
    create?: XOR<Enumerable<BannerCreateWithoutAssetInput>, Enumerable<BannerUncheckedCreateWithoutAssetInput>>
    connectOrCreate?: Enumerable<BannerCreateOrConnectWithoutAssetInput>
    createMany?: BannerCreateManyAssetInputEnvelope
    connect?: Enumerable<BannerWhereUniqueInput>
  }

  export type BannerUncheckedCreateNestedManyWithoutAssetInput = {
    create?: XOR<Enumerable<BannerCreateWithoutAssetInput>, Enumerable<BannerUncheckedCreateWithoutAssetInput>>
    connectOrCreate?: Enumerable<BannerCreateOrConnectWithoutAssetInput>
    createMany?: BannerCreateManyAssetInputEnvelope
    connect?: Enumerable<BannerWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BannerUpdateManyWithoutAssetNestedInput = {
    create?: XOR<Enumerable<BannerCreateWithoutAssetInput>, Enumerable<BannerUncheckedCreateWithoutAssetInput>>
    connectOrCreate?: Enumerable<BannerCreateOrConnectWithoutAssetInput>
    upsert?: Enumerable<BannerUpsertWithWhereUniqueWithoutAssetInput>
    createMany?: BannerCreateManyAssetInputEnvelope
    set?: Enumerable<BannerWhereUniqueInput>
    disconnect?: Enumerable<BannerWhereUniqueInput>
    delete?: Enumerable<BannerWhereUniqueInput>
    connect?: Enumerable<BannerWhereUniqueInput>
    update?: Enumerable<BannerUpdateWithWhereUniqueWithoutAssetInput>
    updateMany?: Enumerable<BannerUpdateManyWithWhereWithoutAssetInput>
    deleteMany?: Enumerable<BannerScalarWhereInput>
  }

  export type BannerUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: XOR<Enumerable<BannerCreateWithoutAssetInput>, Enumerable<BannerUncheckedCreateWithoutAssetInput>>
    connectOrCreate?: Enumerable<BannerCreateOrConnectWithoutAssetInput>
    upsert?: Enumerable<BannerUpsertWithWhereUniqueWithoutAssetInput>
    createMany?: BannerCreateManyAssetInputEnvelope
    set?: Enumerable<BannerWhereUniqueInput>
    disconnect?: Enumerable<BannerWhereUniqueInput>
    delete?: Enumerable<BannerWhereUniqueInput>
    connect?: Enumerable<BannerWhereUniqueInput>
    update?: Enumerable<BannerUpdateWithWhereUniqueWithoutAssetInput>
    updateMany?: Enumerable<BannerUpdateManyWithWhereWithoutAssetInput>
    deleteMany?: Enumerable<BannerScalarWhereInput>
  }

  export type AssetCreateNestedOneWithoutBannerInput = {
    create?: XOR<AssetCreateWithoutBannerInput, AssetUncheckedCreateWithoutBannerInput>
    connectOrCreate?: AssetCreateOrConnectWithoutBannerInput
    connect?: AssetWhereUniqueInput
  }

  export type AssetUpdateOneRequiredWithoutBannerNestedInput = {
    create?: XOR<AssetCreateWithoutBannerInput, AssetUncheckedCreateWithoutBannerInput>
    connectOrCreate?: AssetCreateOrConnectWithoutBannerInput
    upsert?: AssetUpsertWithoutBannerInput
    connect?: AssetWhereUniqueInput
    update?: XOR<AssetUpdateWithoutBannerInput, AssetUncheckedUpdateWithoutBannerInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type BannerCreateWithoutAssetInput = {
    id?: string
    path: string
    width: number
    height: number
  }

  export type BannerUncheckedCreateWithoutAssetInput = {
    id?: string
    path: string
    width: number
    height: number
  }

  export type BannerCreateOrConnectWithoutAssetInput = {
    where: BannerWhereUniqueInput
    create: XOR<BannerCreateWithoutAssetInput, BannerUncheckedCreateWithoutAssetInput>
  }

  export type BannerCreateManyAssetInputEnvelope = {
    data: Enumerable<BannerCreateManyAssetInput>
    skipDuplicates?: boolean
  }

  export type BannerUpsertWithWhereUniqueWithoutAssetInput = {
    where: BannerWhereUniqueInput
    update: XOR<BannerUpdateWithoutAssetInput, BannerUncheckedUpdateWithoutAssetInput>
    create: XOR<BannerCreateWithoutAssetInput, BannerUncheckedCreateWithoutAssetInput>
  }

  export type BannerUpdateWithWhereUniqueWithoutAssetInput = {
    where: BannerWhereUniqueInput
    data: XOR<BannerUpdateWithoutAssetInput, BannerUncheckedUpdateWithoutAssetInput>
  }

  export type BannerUpdateManyWithWhereWithoutAssetInput = {
    where: BannerScalarWhereInput
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyWithoutBannerInput>
  }

  export type BannerScalarWhereInput = {
    AND?: Enumerable<BannerScalarWhereInput>
    OR?: Enumerable<BannerScalarWhereInput>
    NOT?: Enumerable<BannerScalarWhereInput>
    id?: StringFilter | string
    path?: StringFilter | string
    width?: IntFilter | number
    height?: IntFilter | number
    assetId?: StringFilter | string
  }

  export type AssetCreateWithoutBannerInput = {
    id?: string
    name: string
    path: string
    mime: string
    size: number
    created?: Date | string
  }

  export type AssetUncheckedCreateWithoutBannerInput = {
    id?: string
    name: string
    path: string
    mime: string
    size: number
    created?: Date | string
  }

  export type AssetCreateOrConnectWithoutBannerInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutBannerInput, AssetUncheckedCreateWithoutBannerInput>
  }

  export type AssetUpsertWithoutBannerInput = {
    update: XOR<AssetUpdateWithoutBannerInput, AssetUncheckedUpdateWithoutBannerInput>
    create: XOR<AssetCreateWithoutBannerInput, AssetUncheckedCreateWithoutBannerInput>
  }

  export type AssetUpdateWithoutBannerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mime?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetUncheckedUpdateWithoutBannerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mime?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerCreateManyAssetInput = {
    id?: string
    path: string
    width: number
    height: number
  }

  export type BannerUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
  }

  export type BannerUncheckedUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
  }

  export type BannerUncheckedUpdateManyWithoutBannerInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
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