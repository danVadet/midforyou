﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using backend.Data;

#nullable disable

namespace backend.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20250401193930_createInitial")]
    partial class createInitial
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("backend.Models.Container", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<float>("capacityVolume")
                        .HasColumnType("real");

                    b.Property<float>("capacityWeight")
                        .HasColumnType("real");

                    b.Property<string>("image")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("id");

                    b.ToTable("Containers");
                });

            modelBuilder.Entity("backend.Models.PortMarker", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<string>("address")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("color")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("image")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("label")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<float>("lat")
                        .HasColumnType("real");

                    b.Property<float>("lng")
                        .HasColumnType("real");

                    b.Property<int>("portType")
                        .HasColumnType("integer");

                    b.Property<int>("stateId")
                        .HasColumnType("integer");

                    b.HasKey("id");

                    b.HasIndex("stateId");

                    b.ToTable("PortMarkers");
                });

            modelBuilder.Entity("backend.Models.Product", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<int?>("Containerid")
                        .HasColumnType("integer");

                    b.Property<float>("height")
                        .HasColumnType("real");

                    b.Property<float>("length")
                        .HasColumnType("real");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("quantity")
                        .HasColumnType("integer");

                    b.Property<float>("volume")
                        .HasColumnType("real");

                    b.Property<float>("volumeTotal")
                        .HasColumnType("real");

                    b.Property<float>("weight")
                        .HasColumnType("real");

                    b.Property<float>("weightTotal")
                        .HasColumnType("real");

                    b.Property<float>("width")
                        .HasColumnType("real");

                    b.HasKey("id");

                    b.HasIndex("Containerid");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("backend.Models.State", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Label")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<float>("Lat")
                        .HasColumnType("real");

                    b.Property<float>("Lng")
                        .HasColumnType("real");

                    b.HasKey("Id");

                    b.ToTable("States");
                });

            modelBuilder.Entity("backend.Models.PortMarker", b =>
                {
                    b.HasOne("backend.Models.State", "state")
                        .WithMany()
                        .HasForeignKey("stateId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("state");
                });

            modelBuilder.Entity("backend.Models.Product", b =>
                {
                    b.HasOne("backend.Models.Container", null)
                        .WithMany("products")
                        .HasForeignKey("Containerid");
                });

            modelBuilder.Entity("backend.Models.Container", b =>
                {
                    b.Navigation("products");
                });
#pragma warning restore 612, 618
        }
    }
}
