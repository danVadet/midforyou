using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class AddColumnContainer : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "typeContainer",
                table: "Containers",
                newName: "name");

            migrationBuilder.AddColumn<string>(
                name: "image",
                table: "Containers",
                type: "text",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "image",
                table: "Containers");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "Containers",
                newName: "typeContainer");
        }
    }
}
