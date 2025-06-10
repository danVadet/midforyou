public static class EnumHelper
{
    public static List<DropdownListItem> ConvertEnumToDropDownSource<T>()
    {
        List<DropdownListItem> items = new List<DropdownListItem>();


        foreach (var itemType in Enum.GetValues(typeof(T)))
        {
            items.Add(new DropdownListItem()
            {
                name = Enum.GetName(typeof(T), itemType),
                value = (int)itemType + 1
            });
        }

        return items;
    }
}