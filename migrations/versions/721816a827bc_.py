"""empty message

Revision ID: 721816a827bc
Revises: 6437731f5e8c
Create Date: 2022-05-26 21:47:07.617801

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '721816a827bc'
down_revision = '6437731f5e8c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('workoutA',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('squat', sa.String(length=120), nullable=False),
    sa.Column('bench', sa.String(length=80), nullable=False),
    sa.Column('chinup', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('squat')
    )
    op.create_table('workoutB',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('squat', sa.String(length=120), nullable=False),
    sa.Column('overheadpress', sa.String(length=80), nullable=False),
    sa.Column('deadlift', sa.String(length=80), nullable=False),
    sa.Column('chinup', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('squat')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('workoutB')
    op.drop_table('workoutA')
    # ### end Alembic commands ###