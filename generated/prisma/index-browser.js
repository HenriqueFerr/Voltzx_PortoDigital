
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  user_type: 'user_type',
  phone: 'phone',
  created_at: 'created_at'
};

exports.Prisma.LandsScalarFieldEnum = {
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

exports.Prisma.LandownersScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  document_id: 'document_id'
};

exports.Prisma.CompaniesScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  document_id: 'document_id',
  company_name: 'company_name'
};

exports.Prisma.InvestorsScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  document_id: 'document_id'
};

exports.Prisma.ProjectScalarFieldEnum = {
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

exports.Prisma.InvesimentScalarFieldEnum = {
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

exports.Prisma.ProjectProposalScalarFieldEnum = {
  id: 'id',
  projectId: 'projectId',
  landsId: 'landsId',
  statusProjectProposal: 'statusProjectProposal',
  createdAt: 'createdAt',
  ownerAgreeProjectProposal: 'ownerAgreeProjectProposal'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.UserType = exports.$Enums.UserType = {
  INVESTOR: 'INVESTOR',
  OWNER: 'OWNER',
  COMPANY: 'COMPANY'
};

exports.StatusApproval = exports.$Enums.StatusApproval = {
  pending_approval: 'pending_approval',
  active: 'active',
  completed: 'completed'
};

exports.OwnerAgree = exports.$Enums.OwnerAgree = {
  pending: 'pending',
  accepted: 'accepted',
  rejected: 'rejected'
};

exports.CompanyAgree = exports.$Enums.CompanyAgree = {
  pending: 'pending',
  accepted: 'accepted',
  rejected: 'rejected'
};

exports.StatusInvesiment = exports.$Enums.StatusInvesiment = {
  pending: 'pending',
  accepted: 'accepted',
  rejected: 'rejected'
};

exports.statusProposal = exports.$Enums.statusProposal = {
  pending: 'pending',
  accepted: 'accepted',
  rejected: 'rejected'
};

exports.OwnerAgreeProposal = exports.$Enums.OwnerAgreeProposal = {
  pending: 'pending',
  accepted: 'accepted',
  rejected: 'rejected'
};

exports.Prisma.ModelName = {
  Users: 'Users',
  Lands: 'Lands',
  landowners: 'landowners',
  companies: 'companies',
  investors: 'investors',
  Project: 'Project',
  Invesiment: 'Invesiment',
  projectProposal: 'projectProposal'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
