export interface BlogPost {
  slug: string
  title: string
  date: string
  formattedDate: string
  readingTime: string
  category: string
  excerpt: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-production-kafka-spark-pipeline',
    title: 'Building a Production-Grade Streaming Pipeline with Kafka and Spark',
    date: '2024-01-15',
    formattedDate: 'Jan 15, 2024',
    readingTime: '8 min read',
    category: 'Data Engineering',
    excerpt:
      'A deep dive into designing fault-tolerant, scalable streaming pipelines that handle millions of events per day — covering architecture decisions, failure modes, and lessons from production.',
    content: `
## Introduction

Building streaming pipelines that work in production is very different from the tutorials. This post covers the architecture and hard-won lessons from building a pipeline processing over 1 million events per day.

## Architecture Overview

Our stack: **Kafka** for ingestion, **Spark Structured Streaming** for transformation, and **BigQuery** as the analytical sink.

\`\`\`python
# Spark Structured Streaming — reading from Kafka
df = (
    spark.readStream
    .format("kafka")
    .option("kafka.bootstrap.servers", BOOTSTRAP_SERVERS)
    .option("subscribe", "events.raw")
    .option("startingOffsets", "latest")
    .load()
)
\`\`\`

## Key Design Decisions

### 1. Exactly-once semantics
We use Kafka transactions + Spark checkpointing to guarantee each event is processed exactly once — even across restarts.

### 2. Schema evolution
Confluent Schema Registry manages backward-compatible schema changes without breaking downstream consumers.

### 3. Backpressure handling
Spark's built-in \`maxOffsetsPerTrigger\` prevents any single micro-batch from overwhelming the cluster during traffic spikes.

## Lessons from Production

- **Always checkpoint to durable storage** — local checkpoints disappear when nodes restart
- **Dead-letter queues are not optional** — malformed events will happen; capture them
- **Monitor consumer lag, not just throughput** — lag is the real signal of pipeline health

## Conclusion

Streaming pipelines are complex, but with the right architecture they become reliable and maintainable. The key is designing for failure from day one.
    `.trim(),
  },
  {
    slug: 'dbt-best-practices-transformation-layer',
    title: 'dbt Best Practices: Structuring Your Data Transformation Layer',
    date: '2023-11-08',
    formattedDate: 'Nov 8, 2023',
    readingTime: '6 min read',
    category: 'Analytics Engineering',
    excerpt:
      'How to structure your dbt project for long-term maintainability and scale — covering folder conventions, model layers, testing strategies, and documentation that teams actually use.',
    content: `
## The Problem with Unstructured dbt Projects

Most dbt projects start clean and grow messy. Models with no clear ownership, tests that only cover 20% of tables, and documentation written once and never updated. This post shows how to avoid that.

## The Medallion Layer Pattern

Adopt a clear three-layer model architecture:

\`\`\`
models/
├── staging/       # 1:1 with source tables, light cleaning
├── intermediate/  # Business logic, joins, aggregations
└── marts/         # Consumer-facing, denormalised tables
\`\`\`

## Testing Strategy

Every model should have at minimum:

\`\`\`yaml
models:
  - name: fct_orders
    columns:
      - name: order_id
        tests:
          - unique
          - not_null
      - name: customer_id
        tests:
          - not_null
          - relationships:
              to: ref('dim_customers')
              field: customer_id
\`\`\`

## The 100% Documentation Rule

Use \`dbt-checkpoint\` in CI to enforce that every model has a description before it can be merged:

\`\`\`yaml
# .pre-commit-config.yaml
- repo: https://github.com/dbt-checkpoint/dbt-checkpoint
  hooks:
    - id: check-model-has-description
\`\`\`

## Conclusion

A well-structured dbt project is a joy to work in. Invest in conventions early — the return compounds over time.
    `.trim(),
  },
  {
    slug: 'modern-data-stack-explained',
    title: 'The Modern Data Stack: What It Is and Why It Matters',
    date: '2023-09-22',
    formattedDate: 'Sep 22, 2023',
    readingTime: '5 min read',
    category: 'Data Engineering',
    excerpt:
      'Breaking down the modern data stack — what it is, what problems it solves, and why engineering teams are adopting it over legacy ETL and on-premise warehouses.',
    content: `
## What Is the Modern Data Stack?

The modern data stack (MDS) is a collection of cloud-native, best-in-class tools for ingesting, storing, transforming, and visualising data. Unlike the legacy all-in-one ETL suites, each tool in the MDS does one job extremely well.

## The Core Components

| Layer | Tool Examples |
|-------|---------------|
| Ingestion | Fivetran, Airbyte, Stitch |
| Storage | Snowflake, BigQuery, Redshift |
| Transformation | dbt |
| Orchestration | Airflow, Prefect, Dagster |
| Visualisation | Looker, Power BI, Tableau |

## Why It Matters

**Before the MDS:**
- ETL logic buried in stored procedures or Java jobs
- Monolithic tools that do everything poorly
- Changes require DBA approval and weeks of lead time

**After the MDS:**
- Version-controlled SQL transformations in dbt
- Analytics engineers (not just DBAs) can ship data models
- Cloud auto-scaling means no more capacity planning

## The Trade-off

The MDS is not free. Each tool has a cost, an API to learn, and potential for vendor lock-in. Evaluate against your scale and team maturity before committing.

## Conclusion

The modern data stack has fundamentally changed how data teams operate. For most organisations, the productivity gains far outweigh the complexity costs.
    `.trim(),
  },
  {
    slug: 'data-quality-testing-with-dbt',
    title: 'Data Quality Testing with dbt: A Practical Guide',
    date: '2023-07-14',
    formattedDate: 'Jul 14, 2023',
    readingTime: '7 min read',
    category: 'Analytics Engineering',
    excerpt:
      'How to implement comprehensive data quality tests in your dbt project — from basic uniqueness checks to custom statistical tests that catch data drift before it reaches dashboards.',
    content: `
## Why Data Quality Testing Matters

Bad data in dashboards destroys trust faster than any technical failure. Data quality tests are your last line of defence before metrics reach stakeholders.

## Built-in dbt Tests

dbt ships four generic tests:

\`\`\`yaml
columns:
  - name: user_id
    tests:
      - unique        # No duplicates
      - not_null      # No nulls
      - accepted_values:
          values: ['active', 'churned', 'pending']
      - relationships:
          to: ref('dim_users')
          field: id
\`\`\`

## Custom Singular Tests

For business-specific rules, write custom SQL tests:

\`\`\`sql
-- tests/assert_revenue_is_positive.sql
select *
from {{ ref('fct_revenue') }}
where total_revenue < 0
\`\`\`

If this query returns any rows, the test fails.

## dbt-expectations for Statistical Tests

The \`dbt-expectations\` package brings Great Expectations-style tests to dbt:

\`\`\`yaml
- dbt_expectations.expect_column_values_to_be_between:
    min_value: 0
    max_value: 100
- dbt_expectations.expect_table_row_count_to_be_between:
    min_value: 1000
    max_value: 10000000
\`\`\`

## Running Tests in CI

Block merges when tests fail:

\`\`\`yaml
# .github/workflows/dbt-ci.yml
- name: Run dbt tests
  run: dbt test --select state:modified+
\`\`\`

## Conclusion

Invest in data quality tests as seriously as unit tests in application code. Your future self — and your stakeholders — will thank you.
    `.trim(),
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
