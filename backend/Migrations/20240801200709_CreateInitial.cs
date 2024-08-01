using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class CreateInitial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Containers",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    typeContainer = table.Column<string>(type: "text", nullable: true),
                    productId = table.Column<int>(type: "integer", nullable: true),
                    capacidadePeso = table.Column<float>(type: "real", nullable: false),
                    capacidadeVolume = table.Column<float>(type: "real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Containers", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    nome = table.Column<string>(type: "text", nullable: true),
                    quantidade = table.Column<int>(type: "integer", nullable: false),
                    peso = table.Column<float>(type: "real", nullable: false),
                    volume = table.Column<float>(type: "real", nullable: false),
                    volumeTotal = table.Column<float>(type: "real", nullable: false),
                    pesoTotal = table.Column<float>(type: "real", nullable: false),
                    Containerid = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.id);
                    table.ForeignKey(
                        name: "FK_Products_Containers_Containerid",
                        column: x => x.Containerid,
                        principalTable: "Containers",
                        principalColumn: "id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Containers_productId",
                table: "Containers",
                column: "productId");

            migrationBuilder.CreateIndex(
                name: "IX_Products_Containerid",
                table: "Products",
                column: "Containerid");

            migrationBuilder.AddForeignKey(
                name: "FK_Containers_Products_productId",
                table: "Containers",
                column: "productId",
                principalTable: "Products",
                principalColumn: "id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Containers_Products_productId",
                table: "Containers");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Containers");
        }
    }
}
