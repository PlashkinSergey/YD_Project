﻿// <auto-generated />
using System;
using CinemaBack.DB;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace CinemaBack.Migrations
{
    [DbContext(typeof(CinemaDBContext))]
    partial class CinemaDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("CinemaBack.DB.Models.DataUser", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid")
                        .HasColumnName("DataUserID");

                    b.Property<string>("Inn")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("Inn");

                    b.Property<string>("PasNum")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("PassportNumber");

                    b.Property<string>("PasSer")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("PassportSeries");

                    b.Property<string>("Phone")
                        .HasColumnType("text")
                        .HasColumnName("Phone");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uuid")
                        .HasColumnName("UserID");

                    b.HasKey("Id");

                    b.ToTable("DataUser");
                });

            modelBuilder.Entity("CinemaBack.DB.Models.User", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid")
                        .HasColumnName("UserID");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("Email");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("Name");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("Password");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("Type");

                    b.HasKey("ID");

                    b.ToTable("User");
                });
#pragma warning restore 612, 618
        }
    }
}
