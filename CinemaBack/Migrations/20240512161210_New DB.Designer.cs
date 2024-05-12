﻿// <auto-generated />
using System;
using CinemaBack.DB;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace CinemaBack.Migrations
{
    [DbContext(typeof(CinemaDBContext))]
    [Migration("20240512161210_New DB")]
    partial class NewDB
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
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
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("Phone");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uuid")
                        .HasColumnName("UserID");

                    b.HasKey("Id");

                    b.ToTable("DataUser");
                });

            modelBuilder.Entity("CinemaBack.DB.Models.Distributor", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid")
                        .HasColumnName("DistributorId");

                    b.Property<string>("Company")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("Company");

                    b.Property<string>("Country")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("Country");

                    b.Property<string>("Site")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("Site");

                    b.HasKey("Id");

                    b.ToTable("Distributor");
                });

            modelBuilder.Entity("CinemaBack.DB.Models.Film", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid")
                        .HasColumnName("FilmId");

                    b.Property<string>("Director")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("Director");

                    b.Property<Guid>("DistributorId")
                        .HasColumnType("uuid")
                        .HasColumnName("DistributorId");

                    b.Property<string>("Duration")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("Duration");

                    b.Property<string>("Genre")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("Genre");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("NameFilm");

                    b.HasKey("Id");

                    b.ToTable("Film");
                });

            modelBuilder.Entity("CinemaBack.DB.Models.Hall", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid")
                        .HasColumnName("HallId");

                    b.Property<int>("NumberHall")
                        .HasColumnType("integer")
                        .HasColumnName("NumberHall");

                    b.HasKey("Id");

                    b.ToTable("Hall");
                });

            modelBuilder.Entity("CinemaBack.DB.Models.Order", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid")
                        .HasColumnName("OrderId");

                    b.Property<Guid>("EmployeeId")
                        .HasColumnType("uuid")
                        .HasColumnName("EmployeeId");

                    b.Property<string>("RegDate")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("RegistrationDate");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uuid")
                        .HasColumnName("UserId");

                    b.HasKey("Id");

                    b.ToTable("Order");
                });

            modelBuilder.Entity("CinemaBack.DB.Models.Place", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid")
                        .HasColumnName("PlaceId");

                    b.Property<Guid>("HallId")
                        .HasColumnType("uuid")
                        .HasColumnName("HallId");

                    b.Property<int>("Position")
                        .HasColumnType("integer")
                        .HasColumnName("Position");

                    b.Property<int>("Row")
                        .HasColumnType("integer")
                        .HasColumnName("Row");

                    b.HasKey("Id");

                    b.ToTable("Place");
                });

            modelBuilder.Entity("CinemaBack.DB.Models.Seance", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid")
                        .HasColumnName("SeanceId");

                    b.Property<Guid>("FilmId")
                        .HasColumnType("uuid")
                        .HasColumnName("FilmId");

                    b.Property<Guid>("HallId")
                        .HasColumnType("uuid")
                        .HasColumnName("HallId");

                    b.Property<string>("Price")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("Price");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("Type");

                    b.HasKey("Id");

                    b.ToTable("Seance");
                });

            modelBuilder.Entity("CinemaBack.DB.Models.Ticket", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid")
                        .HasColumnName("TicketId");

                    b.Property<int>("Place")
                        .HasColumnType("integer")
                        .HasColumnName("Place");

                    b.Property<int>("Row")
                        .HasColumnType("integer")
                        .HasColumnName("Row");

                    b.Property<Guid>("SeanceId")
                        .HasColumnType("uuid")
                        .HasColumnName("SeanceId");

                    b.HasKey("Id");

                    b.ToTable("Ticket");
                });

            modelBuilder.Entity("CinemaBack.DB.Models.User", b =>
                {
                    b.Property<Guid>("Id")
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

                    b.HasKey("Id");

                    b.ToTable("User");
                });

            modelBuilder.Entity("CinemaBack.DB.Models.booked_tickets", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid")
                        .HasColumnName("Id");

                    b.Property<Guid>("OrderId")
                        .HasColumnType("uuid")
                        .HasColumnName("OrderId");

                    b.Property<Guid>("TicketId")
                        .HasColumnType("uuid")
                        .HasColumnName("TicketId");

                    b.HasKey("Id");

                    b.ToTable("booked_tickets");
                });
#pragma warning restore 612, 618
        }
    }
}