using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class createInitial : Migration
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
                    name = table.Column<string>(type: "text", nullable: true),
                    image = table.Column<string>(type: "text", nullable: true),
                    capacidadePeso = table.Column<float>(type: "real", nullable: false),
                    capacidadeVolume = table.Column<float>(type: "real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Containers", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "States",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    label = table.Column<string>(type: "text", nullable: true),
                    lat = table.Column<float>(type: "real", nullable: false),
                    lng = table.Column<float>(type: "real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_States", x => x.id);
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

            migrationBuilder.CreateTable(
                name: "PortMarkers",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    portImage = table.Column<string>(type: "text", nullable: true),
                    label = table.Column<string>(type: "text", nullable: true),
                    address = table.Column<string>(type: "text", nullable: true),
                    color = table.Column<string>(type: "text", nullable: true),
                    lat = table.Column<float>(type: "real", nullable: false),
                    lng = table.Column<float>(type: "real", nullable: false),
                    portType = table.Column<int>(type: "integer", nullable: false),
                    stateId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PortMarkers", x => x.id);
                    table.ForeignKey(
                        name: "FK_PortMarkers_States_stateId",
                        column: x => x.stateId,
                        principalTable: "States",
                        principalColumn: "id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_PortMarkers_stateId",
                table: "PortMarkers",
                column: "stateId");

            migrationBuilder.CreateIndex(
                name: "IX_Products_Containerid",
                table: "Products",
                column: "Containerid");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PortMarkers");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "States");

            migrationBuilder.DropTable(
                name: "Containers");
        }
    }
}
