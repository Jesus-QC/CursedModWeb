using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

namespace CursedModWeb.Controllers;

public class PluginListController : ControllerBase
{
    private struct PluginInfo
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Author { get; set; }
        public string Url { get; set; }
    }

    [Route("/plugins/list")]
    public string Index()
    {
        List<PluginInfo> plugins = new();

        // TODO: Get plugins from database. This is just a test.
        for (int i = 0; i < 40; i++)
        {
            plugins.Add(new PluginInfo
            {
                Author = "Jesus-QC",
                Description = "Rich low level modding framework for the game SCP:SL.",
                Title = "CursedMod",
                Url = "CursedMod",
            });
        }

        return JsonSerializer.Serialize(plugins);
    }
}