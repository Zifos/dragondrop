import faunadb from "faunadb";

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET ?? "secret",
  scheme: "https",
  domain: "db.fauna.com",
});

async function main() {
  client.query(
    q.Do(
      q.Map(q.Paginate(q.Documents(q.Collection("users"))), (userRef) =>
        q.Delete(userRef)
      ),
      q.Map(q.Paginate(q.Documents(q.Collection("sessions"))), (sessionRef) =>
        q.Delete(sessionRef)
      ),
      q.Map(q.Paginate(q.Documents(q.Collection("accounts"))), (accountRef) =>
        q.Delete(accountRef)
      )
    )
  );
}

// eslint-disable-next-line no-console
main().catch((error) => console.log(error));
